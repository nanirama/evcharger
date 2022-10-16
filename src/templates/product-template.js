import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

import ProductIndex from "../../src/components/Products/index"

const ProductTemplate = (props) => {  
  return (
    <Layout>
      <div className="relative pt-28 md:pb-28 pb-20">
        <ProductIndex data={props?.data} location={props.location.pathname} />
      </div>    
    </Layout>
  )
}
export const query = graphql`
  query getArticleDetails($id: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    postCards : allContentfulCards(filter: {products: {elemMatch: {id: {eq: $id}}}}) {
      edges {
        node {
          name
          longname
          description {
            childMarkdownRemark {
              excerpt
            }
          }
          thumbnail {
            gatsbyImage(layout: FULL_WIDTH, width: 600, height: 600)
            url
          }
          viewProductButtonText
          viewProductButtonLink
        }
      }
    }
    postDetails:  contentfulProducts(id: {eq: $id}) {
      h1  
      title
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
      } 
      author {
        name
      }
      date(formatString: "MMMM DD, YYYY")
      bodyContent {
        bodyContent
        childMarkdownRemark {
          html
          rawMarkdownBody
          headings(depth: h2) {
            value
          }
        }
      }  
      intro {
        childMarkdownRemark {
          rawMarkdownBody
          html
        }
      } 
      tableData {
        billingCycle
        buttonText
        buttonUrl
        buyOrAsell
        multiCurrency
        price
        payouts
        support
        name
        logo {
          file {
            url
          }
        }
      }
    }
  }
`

export default ProductTemplate