import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
    return (
        <>
            <Head>
                <meta name='description' content='Uk-Coopretive-Society' />
                <link rel='icon' href="/favicon.ico" />
            </Head>
            <div className='bg-cover bg-center bg-fixed bg-[url("/bg/bglightani.svg")]'>
                <Header/>
                <main className="w-full min-h-screen select-none">{props.children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout