import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { WhiteSpace } from '../Element/WhiteSpace';
import Layout from '../components/layout';
import styled from 'styled-components';
import Title from '../Element/Title';
import Seo from '../components/Seo';
import ToC from '../components/ToC';
import { MediaBreakPoint } from '../constants/constants';

const singlePost = ({ data }) => {
  const imageData =
  data.mdx.frontmatter.imageURL 
    ? data.mdx.frontmatter.imageURL.childImageSharp.fluid.src 
    :"https://source.unsplash.com/random/?coding";

  const seoImage = 
  data.mdx.frontmatter.imageURL 
  ?  data.mdx.frontmatter.imageURL.publicURL
  : null;

  const t = data.mdx.tableOfContents.items;

  return (
    <Layout>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
        image={seoImage}
      />
      <SinglePostWrapper>
        <SinglePostTemplateWrapper>
          {imageData && <TopImageContainer src={imageData} />}
          <Title>{data.mdx.frontmatter.title}</Title>
          <WhiteSpace />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </SinglePostTemplateWrapper>
        <ToCWrapper></ToCWrapper>
      <TocContent>
        <ToC items={t}></ToC>
      </TocContent>
      </SinglePostWrapper>
    </Layout>
  );
};

const SinglePostWrapper = styled.div`
  --wrapper-width: 100%;
  --wrapper-min-height: 70vh;

  position: relative;
  display: flex;
  width: var(--wrapper-width);
  min-height: var(--wrapper-min-height);
`;

const SinglePostTemplateWrapper = styled.div`
  --template-width: 65vw;
  --template-mobile-width: 90vw;
  --template-min-height: 70vh;

  --template-margin: 20px 50px;
  --template-border-radius: 20px;
  --template-padding: 50px 10px;

  @media only screen and (max-width: ${`${MediaBreakPoint.bg}`}) {
    width: var(--template-mobile-width);
    margin: 20px 15px;
  }


  min-height: var(--template-min-height);
  background-color: var(--template-background-color);
  margin: var(--template-margin);
  padding: var(--template-padding);
  border-radius: var(--template-border-radius);

  position: relative;
  flex-grow: 1;

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
const TopImageContainer = styled.img`
  position: relative;
  width: 100%;
  height: 50vw;
`;

const ToCWrapper = styled.div`
  width: 300px;
  height: 100px;
  flex-shrink: 0;

  @media only screen and (max-width: ${`${MediaBreakPoint.bg}`}) {
    display: none;
  }
`;
const TocContent = styled.div`
  position: fixed;
  top: 100px;
  right: 2vw;
  width: 300px;
  height: 100px;

  @media only screen and (max-width: ${`${MediaBreakPoint.bg}`}) {
    display: none;
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
        imageURL {
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      tableOfContents
    }
  }
`;

export default singlePost;
