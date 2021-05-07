import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { WhiteSpace } from '../Element/WhiteSpace';
import Layout from '../components/layout';
import styled from 'styled-components';
import Title from '../Element/Title';
import Seo from '../components/Seo';

const singlePost = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
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

  --template-margin: 20px auto;
  --template-border-radius: 20px;
  --template-padding: 50px 30px;

  width: var(--template-width);
  min-height: var(--template-min-height);
  background-color: var(--template-background-color);
  margin: var(--template-margin);
  padding: var(--template-padding);
  border-radius: var(--template-border-radius);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--p-color);
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }
  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  a {
    color: var(--p-color);
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  del {
    text-decoration: line-through;
  }
  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }
  ,
  li,
  ol,
  ul {
    list-style: initial;
  }
  ul,
  ol {
    margin: 1rem 0 1rem 2rem;
  }
  li {
    margin: 0.25rem 0;
  }
  code {
    font-size: 1rem;
    line-height: 1.875rem;
    background-color: var(-bb-background-color);
    padding: 0 0.3rem;
  }
  hr {
    border: 0;
    height: 1px;
    opacity: 0.1;
    margin-top: 2rem;
  }
  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  th {
    font-weight: 700;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
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
