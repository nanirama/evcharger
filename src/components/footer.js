
import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const navigation = {
    quicklinks: [
        { name: 'Privacy', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Contact Us', href: '#' },
    ],
    popularchargers: [
        { name: 'Zappi Charger', href: '#' },
        { name: 'Easee One', href: '#' },
        { name: 'Wallbox Pulsar Plus', href: '#' },
    ],
    topcategories: [
        { name: 'All EV Chargers', href: '#' },
        { name: 'EV Tarriffs', href: '#' },
        { name: 'Best Solar Chargers', href: '#' },
    ],


}

export default function Footer ({ siteTitle, SiteLogo }) {
    return (

        <footer className="bg-white w-100" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-6xl py-12 px-4 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-16">
                    <div className="space-y-8 xl:col-span-1">
                        <div className='logo'>
                        <Link to="/"><GatsbyImage image={getImage(SiteLogo)} alt={siteTitle} width={380} height={40} className="mb-0 ftr-logo"/></Link>
                        </div>
                        <p className="text-base text-gray-500">
                            © 2022, All Rights Reserved.
                        </p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-3 grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900 capitalize">quick links</h3>
                                <ul className="mt-4 ml-0 space-y-4">
                                    {navigation.quicklinks.map((item) => (
                                        <li key={item.name}>
                                            <Link to={item.href} className="text-base no-underline text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-12 sm:mt-0">
                                <h3 className="text-base font-medium text-gray-900 capitalize">Popular Chargers</h3>
                                <ul className="mt-4 ml-0 space-y-4">
                                    {navigation.popularchargers.map((item) => (
                                        <li key={item.name}>
                                            <Link to={item.href} className="text-base no-underline text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900 capitalize">Top Categories</h3>
                                <ul className="mt-4 ml-0 space-y-4">
                                    {navigation.topcategories.map((item) => (
                                        <li key={item.name}>
                                            <Link to={item.href} className="text-base no-underline text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
