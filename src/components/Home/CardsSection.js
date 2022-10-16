import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const CardsSection = ({ data }) => {
    const firstData = data.slice(0, 1);
    const secondData = data.slice(1, 3);
    const thirdData = data.slice(3, 5);
    const fourData = data.slice(5, 6);
    return (
        <div className="grid lg:grid-flow-row-dense lg:grid-cols-3 grid-cols-1 grid-rows-1 gap-5">
            <div class="col-span-2">
                {firstData && firstData.map((item) => {
                    const { title, intro, slug, contentful_id, heroImage, author, date } = item
                    return (
                        <div class="lg:flex bg-white p-2 shadow-lg rounded-2xl card" key={contentful_id}>
                            <div class="lg:w-2/5 flex-none bg-cover text-center overflow-hidden" title="Woman holding a mug">
                                <Link to={`/slug`}><GatsbyImage image={getImage(heroImage)} alt={title && title} className="mb-0 w-full rounded-lg" /></Link>
                            </div>
                            <div class="sm:p-8 py-8 px-4 flex flex-col leading-normal">
                                <div class="mb-8">
                                    <span className="bg-lime-500 no-underline text-white text-xs py-2 px-4 rounded-lg mb-5 inline-block">EV Chargers</span>
                                    <h3 class="text-gray-900 font-bold text-xl mb-6"><Link to={`/slug`} class="no-underline text-gray-900 hover:text-blue-700">{title && title}</Link></h3>
                                    <p class="text-gray-700 text-xs mb-0">{intro.childMarkdownRemark.excerpt}</p>
                                </div>
                                <div class="flex items-center">
                                    {author?.thumbnail && (
                                        <GatsbyImage image={getImage(author.thumbnail)} alt={author?.name} className='w-12 h-12 rounded-full mr-4 mb-0' />
                                    )}
                                    <div class="text-sm">
                                        <span class="no-underline text-gray-500 font-bold leading-none mb-2 hover:text-blue-600">{author?.name}</span>
                                        <p class="text-gray-400 mb-0 flex sm:flex-row flex-col sm:gap-8 gap-3">{date && date} <span className="flex gap-1 items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.21875C3.25391 0.21875 0.21875 3.25391 0.21875 7C0.21875 10.7461 3.25391 13.7812 7 13.7812C10.7461 13.7812 13.7812 10.7461 13.7812 7C13.7812 3.25391 10.7461 0.21875 7 0.21875ZM7 12.4688C3.97852 12.4688 1.53125 10.0215 1.53125 7C1.53125 3.97852 3.97852 1.53125 7 1.53125C10.0215 1.53125 12.4688 3.97852 12.4688 7C12.4688 10.0215 10.0215 12.4688 7 12.4688ZM8.68984 9.61406L6.36836 7.92695C6.28359 7.86406 6.23438 7.76563 6.23438 7.66172V3.17188C6.23438 2.99141 6.38203 2.84375 6.5625 2.84375H7.4375C7.61797 2.84375 7.76562 2.99141 7.76562 3.17188V7.04648L9.59219 8.37539C9.73984 8.48203 9.76992 8.68711 9.66328 8.83477L9.14922 9.54297C9.04258 9.68789 8.8375 9.7207 8.68984 9.61406Z" fill="black" /></svg> 1 min</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className="flex xl:flex-row md:flex-row flex-col mt-5 gap-4">
                    {secondData && secondData.length > 0 && secondData.map((item) => {
                        const { title, slug, contentful_id, author, date } = item
                        return (
                            <div class="bg-white py-5 px-6 rounded-xl border-l-4 border-blue-300 w-full card" key={contentful_id}>
                                <Link to={`/slug`} class="text-black font-bold text-base no-underline mb-3 inline-block hover:text-blue-700">{title && title}</Link>
                                <div className="flex sm:flex-row flex-col justify-between sm:gap-8 gap-2 text-sm">
                                    <span class="no-underline text-gray-400 mb-0 font-bold hover:text-blue-600">{author?.name}</span>
                                    <p class="text-gray-400 mb-0 flex xl:flex-row lg:flex-col gap-3">{date && date} <span className="flex gap-1 items-center"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.21875C3.25391 0.21875 0.21875 3.25391 0.21875 7C0.21875 10.7461 3.25391 13.7812 7 13.7812C10.7461 13.7812 13.7812 10.7461 13.7812 7C13.7812 3.25391 10.7461 0.21875 7 0.21875ZM7 12.4688C3.97852 12.4688 1.53125 10.0215 1.53125 7C1.53125 3.97852 3.97852 1.53125 7 1.53125C10.0215 1.53125 12.4688 3.97852 12.4688 7C12.4688 10.0215 10.0215 12.4688 7 12.4688ZM8.68984 9.61406L6.36836 7.92695C6.28359 7.86406 6.23438 7.76563 6.23438 7.66172V3.17188C6.23438 2.99141 6.38203 2.84375 6.5625 2.84375H7.4375C7.61797 2.84375 7.76562 2.99141 7.76562 3.17188V7.04648L9.59219 8.37539C9.73984 8.48203 9.76992 8.68711 9.66328 8.83477L9.14922 9.54297C9.04258 9.68789 8.8375 9.7207 8.68984 9.61406Z" fill="black" /></svg> 1 min</span></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex xl:flex-row md:flex-row flex-col mt-5 gap-4">
                    {thirdData && thirdData.length > 0 && thirdData.map((item, index) => {
                        const { title, slug, contentful_id, heroImage, author, date } = item
                        return (
                            <div key={contentful_id} class="card bg-white py-4 xl:px-6 px-4 gap-2 rounded-xl border-l-4 border-blue-300 w-full flex sm:flex-row flex-col sm:items-center">
                                <div class="lg:w-3/12 flex-none bg-cover text-center overflow-hidden relative" title="Woman holding a mug">
                                    <Link to={`/slug`}><GatsbyImage image={getImage(heroImage)} alt={title && title} className="mb-0 w-full rounded-lg" /></Link>
                                </div>
                                <div class="py-4 sm:px-4 flex flex-col leading-normal">
                                    <div class="text-gray-900 font-bold text-base mb-3">{title && title}</div>
                                    <div class="text-sm">
                                        <span class="no-underline text-gray-500 font-bold leading-none mb-2 hover:text-blue-600">{author?.name}</span>
                                        <p class="text-gray-400 mb-0 flex xl:flex-row lg:flex-col xl:gap-4 lg:gap-2 gap-4">{date && date} <span className="flex gap-1 items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.21875C3.25391 0.21875 0.21875 3.25391 0.21875 7C0.21875 10.7461 3.25391 13.7812 7 13.7812C10.7461 13.7812 13.7812 10.7461 13.7812 7C13.7812 3.25391 10.7461 0.21875 7 0.21875ZM7 12.4688C3.97852 12.4688 1.53125 10.0215 1.53125 7C1.53125 3.97852 3.97852 1.53125 7 1.53125C10.0215 1.53125 12.4688 3.97852 12.4688 7C12.4688 10.0215 10.0215 12.4688 7 12.4688ZM8.68984 9.61406L6.36836 7.92695C6.28359 7.86406 6.23438 7.76563 6.23438 7.66172V3.17188C6.23438 2.99141 6.38203 2.84375 6.5625 2.84375H7.4375C7.61797 2.84375 7.76562 2.99141 7.76562 3.17188V7.04648L9.59219 8.37539C9.73984 8.48203 9.76992 8.68711 9.66328 8.83477L9.14922 9.54297C9.04258 9.68789 8.8375 9.7207 8.68984 9.61406Z" fill="black" /></svg> 1 min</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {fourData && fourData.length > 0 && fourData.map((item, index) => {
                const { title, intro, slug, contentful_id, heroImage, author, date } = item
                return (
                    <div key={contentful_id}>
                        <div class="card bg-white p-2 rounded-2xl overflow-hidden shadow-lg">
                            <Link to={`/slug`}><GatsbyImage image={getImage(heroImage)} alt={title && title} className="w-full mb-0 rounded-lg" /></Link>
                            <div class="sm:px-6 px-4 py-3">
                                {/* <span className="bg-lime-500 no-underline text-white text-xs py-2 px-4 rounded-lg mb-5 inline-block">{author?.name}</span> */}
                                <h3 class="text-gray-900 font-bold text-xl mb-4"><Link to={`/slug`} class="no-underline text-gray-900 hover:text-blue-700">{title && title}</Link></h3>
                                <p class="text-gray-700 text-sm">
                                    {intro.childMarkdownRemark.excerpt}
                                </p>
                                <div class="flex items-center">
                                    {author?.thumbnail && (
                                        <GatsbyImage image={getImage(author.thumbnail)} alt={author?.name} className='w-12 h-12 rounded-full mr-4 mb-0' />
                                    )}
                                    <div class="text-sm">
                                        <a href="#" class="no-underline text-gray-500 font-bold leading-none mb-2 text-sm hover:text-blue-700">{author?.name}</a>
                                        <p class="text-gray-400 mb-0 flex xl:flex-row lg:flex-col sm:flex-row flex-col xl:gap-8 gap-2 text-sm">{date && date} <span className="flex gap-1 items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.21875C3.25391 0.21875 0.21875 3.25391 0.21875 7C0.21875 10.7461 3.25391 13.7812 7 13.7812C10.7461 13.7812 13.7812 10.7461 13.7812 7C13.7812 3.25391 10.7461 0.21875 7 0.21875ZM7 12.4688C3.97852 12.4688 1.53125 10.0215 1.53125 7C1.53125 3.97852 3.97852 1.53125 7 1.53125C10.0215 1.53125 12.4688 3.97852 12.4688 7C12.4688 10.0215 10.0215 12.4688 7 12.4688ZM8.68984 9.61406L6.36836 7.92695C6.28359 7.86406 6.23438 7.76563 6.23438 7.66172V3.17188C6.23438 2.99141 6.38203 2.84375 6.5625 2.84375H7.4375C7.61797 2.84375 7.76562 2.99141 7.76562 3.17188V7.04648L9.59219 8.37539C9.73984 8.48203 9.76992 8.68711 9.66328 8.83477L9.14922 9.54297C9.04258 9.68789 8.8375 9.7207 8.68984 9.61406Z" fill="black" /></svg> 1 min</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CardsSection