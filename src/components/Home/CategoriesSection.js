import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

import CardsSection from './CardsSection'

const CategoriesSection = () => {
    const { categoryData } = useStaticQuery(
        graphql`
          query {
            categoryData: allContentfulCategory(
                filter: {slug: {in: ["ev-chargers", "all-charges", "universal-chargers"]}}
            ) {
                edges {
                node {
                    name
                    slug
                    contentful_id
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
            }
          }
        `
      )
    return (
        <div className="bg-gray-100 py-10 ev-section px-4">
            {categoryData && categoryData.edges && categoryData.edges.length>0 && categoryData.edges.map((item,index)=>{
                return(
                    <div className="max-w-6xl mx-auto my-10" key={item.node.contentful_id}>
                        <div className='w-100 flex flex-row justify-between pb-10'>
                            <h2 className='text-2xl font-bold border-l-4 pl-5 border-l-gray-200'>{item.node.name}</h2>
                            <Link to={`category/${item.node.slug}`} className='capitalize text-gray-500 bg-gray-200 rounded-lg no-underline px-4 py-2 text-sm hover:bg-gray-500 hover:text-gray-200'>view more</Link>
                        </div>  
                        <CardsSection data={item.node.products} />              
                    </div>
                )
            })}
            
        </div>
    )
}
export default CategoriesSection