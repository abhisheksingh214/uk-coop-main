import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className={`w-full shadow bg-lightgray text-[#252F40] py-5 xs:mb-[2rem] md:mb-0`}>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='p-4 mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-4'>
          <div className='flex flex-col h-full justify-center'>
            <h1 className=' text-lg font-bold text-[#e745a0]'>Co-Operative department of Uttrakhand</h1>
            <p className='text-sm font-light my-2'>Social</p>
            <div className="flex space-x-3 sm:mt-0 ">
              <Link href="#" target='blank' className="text-slate-500 hover:text-slate-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>                
                <span className="sr-only">Youtube page</span>
              </Link>
            </div>
          </div>

          <div className='flex flex-col'>
            <h1 className=' text-lg font-bold text-[#e745a0]'>CO-OPERATIVE </h1>

            <ul className='flex flex-col justify-center gap-1'>
              <li>
                <Link href="/" className=' underline hover:text-slate-500'>Home</Link>
              </li>
              <li>
                <Link href="/about" className=' underline hover:text-slate-500'>About Us</Link>
              </li>
              <li>
                <Link href="#" className=' underline hover:text-slate-500'>Right To Information</Link>
              </li>
              <li>
                <Link href="#" className='  underline hover:text-slate-500'>Contact Us</Link>
              </li>
              <li>
                <Link href="#" className='  underline hover:text-slate-500'>Sitemap</Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <h1 className=' text-lg font-bold text-[#e745a0]'>HELP AND SUPPORT</h1>

            <ul className='flex flex-col justify-center gap-1'>
              <li>
                <Link href="#" className=' underline hover:text-slate-500'>Help</Link>
              </li>
              <li>
                <Link href="#" className=' underline hover:text-slate-500'>Download & Plug-ins</Link>
              </li>
              <li>
                <Link href="#" className=' underline hover:text-slate-500'>Accessibility Statement</Link>
              </li>
              <li>
                <Link href="#" className='  underline hover:text-slate-500'>Accessibility Options</Link>
              </li>
              <li>
                <Link href="#" className='  underline hover:text-slate-500'>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col h-full justify-center'>
            <ul className='flex flex-col justify-center gap-1'>
              <li>
                <Link href="/" className=' underline hover:text-slate-500'>Hyperlinking Policy</Link>
              </li>
              <li>
                <Link href="/about" className=' underline hover:text-slate-500'>Copyright Policy</Link>
              </li>
              <li>
                <Link href="#" className=' underline hover:text-slate-500'>Disclaimer</Link>
              </li>
              <li>
                <Link href="#" className='  underline hover:text-slate-500'>Terms & Conditions</Link>
              </li>
            </ul>
          </div>

        </div>
        <div>
          <div className='flex sm:flex-row xs:flex-col justify-center items-center gap-5'>
            <p className=' font-light tracking-wider xs:text-center'>All rights reserved. Copyright © 2023 Co-Operative department of Uttrakhand System by <span className=' font-normal'>NIC</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
