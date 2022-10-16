import React from 'react'

const ProductCard = ({ data }) => {    
    const { name, longname, description, thumbnail, viewProductButtonText, viewProductButtonLink } = data
    return (
        <div class="lg:flex lg:flex-row bg-white p-2 shadow-lg rounded-2xl card mb-5">
            {thumbnail && (
                <div class="max-w-xs bg-cover text-center md:basis-1/3 flex flex-column justify-items-center content-center items-center justify-center">
                    <img src={thumbnail.url} alt={longname && longname} className="mb-0 w-full rounded-lg max-w-full" />
                </div>
            )}            
            <div class="sm:p-8 py-8 px-4 flex flex-col md:basis-2/3">
                <div class="mb-8">
                    <h3 class="text-gray-700 font-bold text-xl mb-6"><span class="no-underline text-gray-900 hover:text-blue-700">{name && name}</span></h3>
                    <p class="text-gray-500 text-base mb-0">{description?.childMarkdownRemark?.excerpt}</p>
                    <div className="mt-10"><a href={viewProductButtonLink && viewProductButtonLink} target="_blank" rel="noopener noreferrer" className='capitalize text-gray-500 bg-green-200 rounded-lg no-underline px-10 py-2 text-sm hover:bg-gray-500 hover:text-gray-200'>{viewProductButtonText && viewProductButtonText}</a></div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard