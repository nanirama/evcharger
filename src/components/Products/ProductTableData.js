import React from 'react'

const ProductTableData = ({ data }) => {

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
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-2xl text-gray-500 text-center font-bold pb-10'>Compare Charger Installers</h2>
                    <div className="overflow-x-auto relative drop-shadow-2xl sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-responsive">
                            <thead className="text-base text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="py-4 px-2">
                                        &nbsp;
                                    </th>
                                    <th scope="col" className="py-4 px-2">
                                        Provider
                                    </th>
                                    <th align='center' scope="col" className="py-4 px-2">
                                        Price
                                    </th>
                                    <th align='center' scope="col" className="py-4 px-2">
                                        Online<br/>Survey
                                    </th>
                                    <th align='center' scope="col" className="py-4 px-2">
                                        Finance<br/>Options
                                    </th>
                                    <th align='center' scope="col" className="py-4 px-2">
                                        Nation<br/>wide?
                                    </th>
                                    <th align='center' scope="col" className="py-4 px-2">
                                        OZEV<br/>Registered
                                    </th>
                                    <th align='center' scope="col" className="py-4 px-2">
                                        &nbsp;
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-base">
                                {data && data.map((item, index) => {
                                    return (
                                        <tr className="bg-white border-b even:bg-gray-100 dark:border-gray-700" key={index}>
                                            <td className="py-4 px-2">
                                                <span className=' font-medium text-gray-900 bg-gray-50 rounded-full flex items-center justify-center w-8 h-8 whitespace-nowrap dark:text-white'>{index + 1}</span>
                                            </td>
                                            <td className="py-4 px-2 w-18">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={item.logo.file.url} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{item.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td align='center' className="py-4 px-2">
                                                ${item.price}<br />
                                                {item.billingCycle}
                                            </td>
                                            <td align='center' className="py-4 px-2 w-11">
                                                {greenHandler(item.multiCurrency)}
                                            </td>
                                            <td align='center' className="py-4 px-2 w-11">
                                                {greenHandler(item.payouts)}
                                            </td>
                                            <td align='center' className="py-4 px-2 w-11">
                                                {greenHandler(item.buyOrAsell)}
                                             </td>
                                            <td align='center' className="py-4 px-2 w-11">
                                                {greenHandler(item.support)}                                          
                                            </td>
                                            <td align='center' className="w-18 py-2 pr-2 ">
                                                <a href={item.buttonUrl} target="_blank" rel="noopener noreferrer" className="block border-2 border-rose-600 p-2 font-medium no-underline hover:bg-rose-600 text-rose-600 hover:text-white hover:no-underline capitalize">{item.buttonText}</a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductTableData