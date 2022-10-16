import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div>
                <div className="relative w-100 bg-gray-100 mt-4 py-10">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="relative shadow-xl sm:overflow-hidden rounded-2xl lg:px-28 md:px-16 px-4">
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-indigo-900" />
                            </div>
                            <div className="relative max-w-3xl px-4 py-20">
                                <h1 className="sm:text-4xl text-3xl font-bold tracking-tight text-white">
                                    EV Compared - Compare Electric Car Chargers, Installers, EV Tariffs and more!
                                </h1>
                                <p className="sm:mt-6 mt-4 text-base text-white">
                                    Compare EV Chargers and find the best prices for installation in your area. We find the best deals on home chargers, solar panels and everything EV related. Pick the charger you are looking for below to get started.
                                </p>
                                <div className="mt-10 max-w-sm sm:flex sm:max-w-none">
                                    <div className="space-y-4 sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                        <span
                                            className="flex items-center flex-row gap-2 capitalize justify-center rounded-md border border-transparent bg-rose-600 px-4 py-3 text-base font-medium text-white no-underline shadow-sm hover:bg-opacity-70 sm:px-8"
                                        >
                                            compare chargers <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16 16 12.4187 16 8ZM8.30937 11.9625C8.12187 11.8844 8 11.7031 8 11.5V9.5H5C4.44781 9.5 4 9.05219 4 8.5V7.5C4 6.94781 4.44781 6.5 5 6.5H8V4.5C8 4.29784 8.12159 4.11531 8.30859 4.03813C8.49559 3.9605 8.71047 4.00347 8.85359 4.14653L12.3536 7.64653C12.5488 7.84178 12.5488 8.15841 12.3536 8.35341L8.85359 11.8534C8.70938 11.9969 8.49687 12.0406 8.30937 11.9625Z" fill="#fff" />
                                            </svg>
                                        </span>
                                        <span
                                            className="flex items-center flex-row gap-2 capitalize justify-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-base font-medium no-underline text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                                        >
                                            find the right charger
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16 16 12.4187 16 8ZM8.30937 11.9625C8.12187 11.8844 8 11.7031 8 11.5V9.5H5C4.44781 9.5 4 9.05219 4 8.5V7.5C4 6.94781 4.44781 6.5 5 6.5H8V4.5C8 4.29784 8.12159 4.11531 8.30859 4.03813C8.49559 3.9605 8.71047 4.00347 8.85359 4.14653L12.3536 7.64653C12.5488 7.84178 12.5488 8.15841 12.3536 8.35341L8.85359 11.8534C8.70938 11.9969 8.49687 12.0406 8.30937 11.9625Z" fill="#fff" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default HeroSection