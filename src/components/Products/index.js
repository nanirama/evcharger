import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Markdown from "react-markdown";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Share from "./Share"
import ProductCard from "./ProductCard"


import ProductTableData from "./ProductTableData";


const Index = ({data, location}) => {
    const { postDetails, postCards, site } = data
    const { title, h1, heroImage, intro, bodyContent, author, date, tableData} = postDetails

    const siteTitle = h1 || site.siteMetadata.title
    const siteURL = site.siteMetadata.siteUrl 

    const stitle = `Read ${siteTitle} `;
    const surl = `${siteURL}${location || "/"}`;
    const stwitterHandle = "_MsLinda";
    return (
        <div className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4 product-content">
                <h2 className="text-5xl font-bold text-black">{h1 ? h1 : title}</h2>
                <p className="py-5 text-base">By <strong> {author?.name}</strong> Category <strong> EV Chragers </strong> {date && date}</p>
                <div className="rounded-lg w-100 flex flex-col bg-white">
                    {heroImage && <GatsbyImage image={getImage(heroImage)} alt={h1 && h1} className="mb-0 w-full rounded-t-lg"/>}
                    <div className="p-10">
                    {intro?.childMarkdownRemark?.rawMarkdownBody && (
                        <Markdown
                            children={intro.childMarkdownRemark.rawMarkdownBody}
                            components={{
                                a: ({node, ...props}) => <a className="no-underline text-blue-500" {...props} />,
                                p:  ({node, ...props}) => <p className="text-xl w-100" {...props} />,
                            }}
                        /> 
                    )}                    
                    </div>
                </div>
                <ProductTableData data={tableData} />
                <div className="w-100 grid lg:grid-cols-4 grid-cols-1 gap-5 py-10 relative">
                    <div 
                    className={bodyContent?.childMarkdownRemark?.headings && bodyContent.childMarkdownRemark.headings.length>0 ? 'col-span-3' : 'col-span-4'}>
                        {postCards && postCards.edges && postCards.edges.map((item,index)=> <ProductCard key={index} data={item.node}/>)}
                                         
                        
                        <div class="w-100 bg-white px-8 py-10 shadow-lg rounded-2xl mt-2 product-content">
                            {bodyContent?.childMarkdownRemark?.rawMarkdownBody && (
                                <div dangerouslySetInnerHTML={{ __html: bodyContent?.childMarkdownRemark?.html }} className="w-full" ></div>
                            )}
                        
                         <div className="w-100 border-t border-t-gray-50">
                                <div className="flex flex-row items-center social-icons">
                                    <span className="font-bold text-base text-gray-500 pr-1">Share</span>
                                    <Share
                                        socialConfig={{
                                            twitter : stwitterHandle,
                                            config: {
                                            url: surl,
                                            title: stitle,
                                            },
                                        }}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    {bodyContent?.childMarkdownRemark?.headings && bodyContent.childMarkdownRemark.headings.length>0 && (
                    <div className="col-span-1">                        
                            <div className="sticky top-0">
                                <h2 className="text-xl font-bold text-black">Contents</h2>
                                <div class="lg:flex bg-white p-4 shadow-lg rounded-2xl card my-5">
                                    <ol className="px-2 py-4">
                                        {bodyContent.childMarkdownRemark.headings.map((item, index)=>{
                                            return(
                                                <li>
                                                    <AnchorLink
                                                        className="text-gray-500 text-xl font-normal no-underline"
                                                        href={`#${item.value
                                                            .replaceAll(" ", "-")
                                                            .replace("#", "")                                                
                                                            .replace(":", "")
                                                            .replace("&", "")
                                                            .toLowerCase()}`}
                                                    >
                                                        {item.value}
                                                    </AnchorLink>
                                                </li>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </div>  
                       </div> 
                       )}
                </div>
            </div>
        </div>
    )
}

export default Index