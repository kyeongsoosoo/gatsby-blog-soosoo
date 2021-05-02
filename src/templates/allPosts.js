import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PostItem from '../components/HomeLayout/HomeMain/PostItem';
import HomeLayout from '../components/HomeLayout/HomeLayout';

export default function AllPosts({ pageContext, data }) {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
  const extPage = `/${currentPage + 1}`;

  const posts = data.allMdx.edges;

  return (
    <HomeLayout>
      {posts.map(post => (
        <PostItem
          key={post.node.frontmatter.slug}
          title={post.node.frontmatter.title}
          excerpt={post.node.frontmatter.excerpt}
          tagList={post.node.frontmatter.tagList}
        />
      ))}
    </HomeLayout>
  );
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
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
