import React from 'react';
import { graphql } from 'gatsby';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Pagination from '../components/Pagination';
import Seo from '../components/Seo';
import PostItem from '../components/PostItem';

export default function AllPosts({ pageContext, data }) {
  const {
    currentPage,
    numPages,
    category = false,
    countedTagList,
  } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = category
    ? `/${category}/${currentPage - 1}`
    : currentPage - 1 === 1
    ? '/'
    : `/${currentPage - 1}`;
  const nextPage = category
    ? `/${category}/${currentPage + 1}`
    : `/${currentPage + 1}`;

  const posts = data.allMdx.edges;

  return (
    <HomeLayout totalTagList={countedTagList} category={category}>
      <Seo title='Home'/>
      {posts.map(post => (
        <PostItem
          key={post.node.frontmatter.slug}
          title={post.node.frontmatter.title}
          excerpt={post.node.frontmatter.excerpt}
          tagList={post.node.frontmatter.tagList}
          slug={post.node.frontmatter.slug}
        />
      ))}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </HomeLayout>
  );
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!, $categoryRegex: String) {
    allMdx(
      filter: { frontmatter: { tagList: { regex: $categoryRegex } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            excerpt
            tagList
          }
        }
      }
    }
  }
`;
