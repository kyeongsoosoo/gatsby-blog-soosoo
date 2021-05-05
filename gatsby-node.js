const path = require('path');
const { TagService } = require('./src/utils/TagService');
// const TagService = require('./src/utils/TagService');

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              tagList
            }
            id
          }
        }
      }
    }
  `);

  const Tag = new TagService();
  const countedTagList = Tag.makeCountedTag(data.allMdx.edges);
  console.log('counted ', countedTagList);

  //Create paginated pages for posts

  const postPerPage = 3;

  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve('./src/templates/allPosts.js'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
        countedTagList,
      },
    });
  });

  countedTagList.forEach((tag, idx) => {
    const numPages = Math.ceil(tag.count / postPerPage);
    const tagRegex = `/^${tag.tagName}$/i`;
    Array.from({ length: numPages }).forEach((_, i) =>
      actions.createPage({
        path: `/${tag.tagName}/${i + 1}`,
        component: path.resolve('./src/templates/allPosts.js'),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          categoryRegex: tagRegex,
          numPages,
          currentPage: i + 1,
          category: tag.tagName,
          countedTagList,
        },
      }),
    );
  });

  //Create single blog posts
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id },
    });
  });
};
