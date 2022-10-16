import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import CategoryIndex from "../components/Products/CategoryIndex"


const CategoryTemplate = (props) => {  
  return (
    <Layout>
      <div className="relative pt-28 md:pb-28 pb-20">
        <CategoryIndex data={props.data.CategoryData}/>
      </div>    
    </Layout>
  )
}
export const query = graphql`
  query getCategoryDetails($id: String!) {
    CategoryData : contentfulCategory(id: {eq: $id}) {
        name
        products {
          title
          h1
          intro {
              childMarkdownRemark {
                  excerpt
              }
          }
          slug
          contentful_id
          heroImage {
              gatsbyImage(layout: FULL_WIDTH, width: 400, height: 400)
          }
          author {
              name
              thumbnail {
              gatsbyImage(layout: FIXED, width: 50, height: 50)
              }
          }
          date(formatString: "MMMM DD, YYYY")
        }
    }
  }
`

export default CategoryTemplate