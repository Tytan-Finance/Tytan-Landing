import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Footer, Header} from "../components/Layout";
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#100f01"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#000000"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="TYTAN Finance"/>
                <meta name="twitter:description"
                      content="TYTAN is a mega project that will redefine Defi, and Crypto."/>
                <meta name="twitter:image" content="https://tytan.finance/images/hero.png"/>

                <meta httpEquiv='cache-control' content='no-cache'/>
                <meta httpEquiv='expires' content='0'/>
                <meta httpEquiv='pragma' content='no-cache'/>
                <meta name="description"
                      content="TYTAN is a cross chain mega project that will redefine Defi, and Crypto."/>

                <link rel="preconnect" href="https://fonts.gstatic.com"/>

                {/*// <!-- Global site tag (gtag.js) - Google Analytics -->*/}
                {/*<script async*/}
                {/*        src="https://www.googletagmanager.com/gtag/js?id=G-19R7Z015PN"></script>*/}
                {/*<script>*/}
                {/*    window.dataLayer = window.dataLayer || [];*/}
                {/*    function gtag() {dataLayer.push(arguments);}*/}
                {/*    gtag('js', new Date());*/}

                {/*    gtag('config', 'G-19R7Z015PN');*/}
                {/*</script>*/}
                <title>
                    Tytan Finance | TYTAN is a cross chain mega project that will
                    redefine Defi, and Crypto.
                </title>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
