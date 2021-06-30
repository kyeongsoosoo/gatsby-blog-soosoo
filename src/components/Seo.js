import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default function Seo({
  description,
  keywords,
  title,
  image,
  url,
  author,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaImage = image || data.site.siteMetadata.image;
        const metaUrl = url || data.site.siteMetadata.url;
        const metaKeywords = keywords || [
          'gatsby blog',
          'gatsby MDX blog',
          '개츠비 블로그',
        ];
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `author`,
                content: metaAuthor,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(', '),
                  }
                : [],
            )}
          />
        );
      }}
    />
  );
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`;
