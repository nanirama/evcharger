/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { site, SiteLogo } = useStaticQuery(graphql`
    query SiteTitleLogoQuery {
      site {
        siteMetadata {
          title
        }
      }
      SiteLogo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 380, height: 40)
          }
        }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} SiteLogo={SiteLogo} />
      <main>{children}</main>
      <Footer siteTitle={site.siteMetadata.title} SiteLogo={SiteLogo} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
