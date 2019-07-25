/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  

  return (
    <Helmet
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: 'Juha Makkonen - Etsin uusia haasteita taloushallinnosta, finanssialasta tai B2B-myynnistä.' },
        { name: 'keywords', content: 'juha, makkonen, b2b, taloushallinto, finanssi' },
      ]}
      >
      <html lang="fi" />
      </Helmet>
      
  
  )
}


export default SEO
