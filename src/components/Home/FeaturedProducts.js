import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FeaturedProducts = () => {
    const { FeaturedItems } = useStaticQuery(
        graphql`
          query {
            FeaturedItems : allContentfulProducts(
                filter: {private: {ne: true}, featured: {eq: true}}
                sort: {fields: date, order: DESC}
                limit: 3
            ) {
                edges {
                node {
                    title
                    h1
                    slug
                    contentful_id
                    heroImage {
                    gatsbyImage(layout: FULL_WIDTH, width: 400, height: 500)
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
        `
    )
    return (
        <div className='w-100 bg-gray-100 py-10'>
            <div className='max-w-6xl mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-5 '>
                {FeaturedItems && FeaturedItems.edges && FeaturedItems.edges.map((item) => {
                    const { title, slug, contentful_id, heroImage, author, date } = item.node
                    return (
                        <Link to={`/${slug}`}>
                            <div className='card relative rounded-lg' key={contentful_id}>
                                <GatsbyImage image={getImage(heroImage)} alt={title && title} className='feature-img mb-0 h-100 rounded-lg' />
                                <div className='imgtrans'></div>
                                <div className='absolute bottom-10 md:left-10 left-5 z-10 '>
                                    <h5 className='text-white text-2xl font-bold'><span className='text-white no-underline font-bold  hover:text-blue-600'>{title}</span></h5>
                                    <div class="flex items-center mt-4">
                                        {author?.thumbnail && (
                                            <GatsbyImage image={getImage(author.thumbnail)} alt={author?.name} className='w-12 h-12 rounded-full mr-4 mb-0' />
                                        )}
                                        <div class="text-sm">
                                            <span class="no-underline text-gray-500 font-bold leading-none mb-2 text-white hover:text-blue-600">{author?.name}</span>
                                            <p class="text-gray-400 mb-0 flex flex-row sm:gap-8 gap-5">{date && date} <span className="flex gap-1 items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="#a0aec0" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.21875C3.25391 0.21875 0.21875 3.25391 0.21875 7C0.21875 10.7461 3.25391 13.7812 7 13.7812C10.7461 13.7812 13.7812 10.7461 13.7812 7C13.7812 3.25391 10.7461 0.21875 7 0.21875ZM7 12.4688C3.97852 12.4688 1.53125 10.0215 1.53125 7C1.53125 3.97852 3.97852 1.53125 7 1.53125C10.0215 1.53125 12.4688 3.97852 12.4688 7C12.4688 10.0215 10.0215 12.4688 7 12.4688ZM8.68984 9.61406L6.36836 7.92695C6.28359 7.86406 6.23438 7.76563 6.23438 7.66172V3.17188C6.23438 2.99141 6.38203 2.84375 6.5625 2.84375H7.4375C7.61797 2.84375 7.76562 2.99141 7.76562 3.17188V7.04648L9.59219 8.37539C9.73984 8.48203 9.76992 8.68711 9.66328 8.83477L9.14922 9.54297C9.04258 9.68789 8.8375 9.7207 8.68984 9.61406Z" /></svg> 1 min</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts