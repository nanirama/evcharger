import React, { Fragment } from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Popover, Transition } from '@headlessui/react'

const Header = ({ siteTitle, SiteLogo }) => {
 function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
 }

 const resources = [
  { name: 'Link 1', href: '#',  },
  { name: 'Link 2',  href: '#' },
  { name: 'Link 3', href: '#' },
  { name: 'Link 4', href: '#' },
]
  return (
    <header>
      <Popover className="w-100">
        <div className="max-w-6xl mx-auto flex flex-row justify-between	items-center px-4 py-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className='logo'>
              <Link to="/">
                <GatsbyImage image={getImage(SiteLogo)} alt={siteTitle} width={380} height={40} className="mb-0"/>
              </Link>
            </div>
          </div>
          <div className="-my-2 -mr-2 lg:hidden z-60">
            <Popover.Button className="inline-flex items-center justify-end rounded-md p-2 rounded-full text-gray-400 bg-gray-100 w-12 h-12 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <svg fill="#000" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-8 lg:flex">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group inline-flex items-center bg-white text-base capitalize font-bold hover:text-gray-900'
                  )}
                >
                  <span> all chargers</span>
                  {/* <div
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  /> */}
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-xs -translate-x-0 transform px-2 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <div className="relative grid gap-6 bg-white px-5 py-6 no-underline sm:gap-8 sm:p-8">
                        {resources.map((resource) => (
                          <Link to={`/${resource.href}`}
                            key={resource.name}
                            className="-m-3 block rounded-md p-3 no-underline hover:bg-gray-50"
                          >
                            <span className="text-base font-medium text-gray-900 mb-0">{resource.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
           
            <Link to="#" className="capitalize font-bold no-underline text-gray-900 text-base ">
              find a charger
            </Link>
            <Link to="/" className="capitalize font-bold no-underline text-gray-900 text-base">
            installation
            </Link>
            <Link to="/" className="capitalize font-bold no-underline text-gray-900 text-base">
              contact
            </Link>
           
          </Popover.Group>
        </div>
        {/* Mobile menu */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-90 inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className='logo'>
                    <Link to="/">
                    <GatsbyImage image={getImage(SiteLogo)} alt={siteTitle} width={380} height={40} className="pt-1"/>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-white p-2 bg-gray-100">
                      <span className="sr-only">Close menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill='#000'><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                    </Popover.Button>
                  </div>
                </div>

              </div>
              <div className="py-6 px-5">
                <div className="flex flex-col gap-4">
                  <Link to="#" className="capitalize text-black text-sm ttfont-bold">
                  all chargers
                  </Link>

                  <Link to="#" className="capitalize text-black text-sm ttfont-bold">
                  find a charger
                  </Link>
                  <Link to="#" className="capitalize text-black text-sm ttfont-bold">
                  installation
                  </Link>
                  <Link to="#" className="capitalize text-black text-sm ttfont-bold">
                 contact
                 </Link>
                  {resources.map((resource) => (
                    
                  <Link
                    key={resource.name}
                    to={`/${resource.href}`}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </Link>
                ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

    </header>
  )
}

export default Header
