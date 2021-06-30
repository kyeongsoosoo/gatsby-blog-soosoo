import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteInfo() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          githuburl
          nickname
        }
      }
      file(name: { eq: "propfile" }) {
        id
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;
  const profileImageURL = data.file.childImageSharp.fixed;

  return {
    githubURL: siteMetadata.githuburl,
    nickname: siteMetadata.nickname,
    profileImageURL,
  };
}
