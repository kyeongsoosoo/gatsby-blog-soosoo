import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { WhiteSpace } from '../Element/WhiteSpace';
import Layout from '../components/layout';
import styled from 'styled-components';
import Title from '../Element/Title';

const singlePost = ({ data }) => {
  return (
    <Layout>
      <SinglePostTemplateWrapper>
        <Title>{data.mdx.frontmatter.title}</Title>
        <WhiteSpace />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </SinglePostTemplateWrapper>
    </Layout>
  );
};

const SinglePostTemplateWrapper = styled.div`
  --template-width: 80vw;
  --template-min-height: 70vh;
  --template-background-color: white;
  --template-margin: 20px auto;
  --template-border-radius: 20px;
  --template-padding: 50px 30px;

  width: var(--template-width);
  min-height: var(--template-min-height);
  background-color: var(--template-background-color);
  margin: var(--template-margin);
  padding: var(--template-padding);
  border-radius: var(--template-border-radius);
`;

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
      }
    }
  }
`;

export default singlePost;
