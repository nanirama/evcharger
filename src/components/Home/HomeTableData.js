import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const HomeTableData = () => {
    const { tableData } = useStaticQuery(
        graphql`
          query {
            tableData: allContentfulHomepagetabledata {
                edges {
                node {
                    billingCycle
                    buttonText
                    buttonUrl
                    buyOrAsell
                    loadBalancing
                    multiCurrency
                    price
                    solaroptimised
                    support
                    name
                    earthRod
                    logo {
                    file {
                        url
                    }
                    gatsbyImage(layout: FIXED, width: 45, height: 45)
                    }
                }
                }
            }
          }
        `
      )
      const greenHandler = (value) => {
        if (value === '{green-tick}' || value === '{grey-cross}') {
            if (value === '{green-tick}') {
                return (
                    <div className='flex items-center justify-center'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#41c1a6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM11.6187 6.61875C11.9594 6.27813 11.9594 5.72187 11.6187 5.38125C11.2781 5.04063 10.7219 5.04063 10.3813 5.38125L7 8.7625L5.61875 7.38125C5.27813 7.04063 4.72187 7.04063 4.38125 7.38125C4.04063 7.72187 4.04063 8.27812 4.38125 8.61875L6.38125 10.6187C6.72187 10.9594 7.27813 10.9594 7.61875 10.6187L11.6187 6.61875Z" />
                        </svg>
                    </div>
                )
            }
            else
            {
                return (
                    <div className='flex items-center justify-center gray-svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5"/> <circle cx="8" cy="8" r="6.25"/> </svg>
                    </div>
                )   
            }
        }
        else {
            return value
        }
    }
    return (
        <>
            <div className='w-full bg-gray-100 py-10'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h2 className='text-2xl text-gray-500 text-center font-bold pb-10'>Compare Charger Installers</h2>
                        {tableData && tableData.edges && tableData.edges.length>0 && (
                            <div className="overflow-x-auto relative drop-shadow-2xl sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-responsive">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-4 px-2">
                                        &nbsp;
                                    </th>
                                    <th scope="col" class="py-4 px-2">
                                        Charger
                                    </th>
                                    <th scope="col" class="py-4 px-2">
                                        Price
                                    </th>
                                    <th align='center' scope="col" class="py-4 px-2">
                                        Power
                                    </th>
                                    <th align='center' scope="col" class="py-4 px-2">
                                        Socket Type
                                    </th>
                                    <th align='center' scope="col" class="py-4 px-2">
                                        Load Balancing
                                    </th>
                                    <th align='center' scope="col" class="py-4 px-2">
                                        Solar Compatible
                                    </th>
                                    <th align='center' scope="col" class="py-4 px-2">
                                        Charge Scheduling
                                    </th>
                                    <th align='center' scope="col" class="py-4 px-2">
                                        App Control
                                    </th>
                                    <th scope="col" class="py-4 px-2">
                                        &nbsp;
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData && tableData.edges && tableData.edges.map(({node},index)=>{
                                    return(
                                        <tr className="bg-white border-b even:bg-gray-100 dark:border-gray-700" key={index}>
                                            <th scope="row" class="py-4 px-2">
                                                <span className=' font-medium text-gray-900 bg-gray-50 rounded-full flex items-center justify-center w-8 h-8 whitespace-nowrap dark:text-white'>{index+1}</span>
                                            </th>
                                            <td class="py-4 px-2 w-22">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                    <GatsbyImage image={getImage(node.logo)} alt={node.name} className='h-10 w-10 rounded-full' />
                                                    {/* <img className="h-10 w-10 rounded-full" src={node.logo.file.url} alt={node.name} /> */}
                                                    </div>
                                                    <div className="ml-4">
                                                    <div className="font-medium text-gray-900">{node.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="py-4 px-2 w-22">
                                                {node.price}
                                            </td>
                                            <td align='center' class="py-4 px-2">
                                                {greenHandler(node.multiCurrency)}
                                            </td>
                                            <td align='center' class="py-4 px-2 w-15">
                                                {greenHandler(node.buyOrAsell)}
                                            </td>
                                            <td align='center' class="py-4 px-2 w-11">
                                                {greenHandler(node.loadBalancing)}
                                            </td>
                                            <td align='center' class="py-4 px-2 w-11">
                                                {greenHandler(node.solaroptimised)}
                                            </td>
                                            <td align='center' class="py-4 px-2 w-11">
                                                {greenHandler(node.support)}
                                            </td>
                                            <td align='center' class="py-4 px-2 w-11">
                                                {greenHandler(node.earthRod)}
                                            </td>
        
                                            <td align='center' className="w-32 py-2 pr-2 ">
                                            <a href={node.buttonUrl} target="_blank" rel="noopener noreferrer" className="block border-2 border-rose-600 p-2 font-medium no-underline hover:bg-rose-600 text-rose-600 hover:text-white hover:no-underline capitalize text-center">{node.buttonText}</a>
                                            </td>
                                        </tr>
                                    )
                                })}    
                            </tbody>
                        </table>
                        </div>
                        )}
                        
                    
                </div>
            </div>
        </>
    )
}
export default HomeTableData