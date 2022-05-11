import React from 'react'
import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'

const MyDocument: React.FC<Document> = () => {
    return (
        <Html>

        <Head>

            {/*     Importing the fonts     */}
            <link
                rel="preload"
                href="/fonts/Planer-Bold.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />
            <link
                rel="preload"
                href="/fonts/Planer-DemiBold.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-DemiBoldItalic.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-ExtraBold.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-ExtraBoldItalic.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-ExtraLight.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-Italic.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-Light.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-Medium.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-MediumItalic.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-Regular.ttf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

            <link
                rel="preload"
                href="/fonts/Planer-Regular.otf"
                as="font"
                type="font/truetype"
                crossOrigin=""
            />

        </Head>

        <body>
        <Main/>
        </body>

        <NextScript/>
        </Html>
    )
}

export default MyDocument