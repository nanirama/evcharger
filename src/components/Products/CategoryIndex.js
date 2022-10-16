import React from "react"
import ProductItem from "./ProductItem"

const CategoryIndex = ({ data, location }) => {    
    const { name, products } = data
    return (
        <div className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-gray-700 pb-20">{name && name}</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center items-center w-100 gap-5">
                    {products && products.length>0 && products.map((item)=> <ProductItem key={item.contentful_id} data={item} />)}                   
                </div>
            </div>
        </div>
    )
}

export default CategoryIndex