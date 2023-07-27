import "/styles/globals.css";
import Social from "/components/Socials";
import Nav from "components/Nav";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'




export default function App({ Component, pageProps }) {


  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="gtag-init"
      >

        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <title>Ezediniru Daniel</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />


        {/* Meta Tags */}
        <meta name="description" content="Ezediniru Daniel || @amdanielbryte" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Ezediniru Daniel" />
        <meta property="og:description" content="Frontend engineer and product Designer with 3 years of building experience" />
        <meta property="og:url" content="https://www.ezediniru.com/" />
        <meta property="og:site_name" content="Daniel Bryte Portfolio" />
        <meta property="og:locale" content="en_UK" />
        <meta property="og:image" content="https://res.cloudinary.com/dhq4zyjbq/image/upload/v1688046890/portfolio_assets/ezediniru-daniel_ox0xmi.png" />
        <meta property="og:image:alt" content="Ezediniru Daniel Website" />

        {/* Twitter */}
        <meta property="og:type" content="website" /><meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ezediniru Daniel" />
        <meta name="twitter:description" content="Frontend engineer and product Designer with 3 years of building experience" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dhq4zyjbq/image/upload/v1688046890/portfolio_assets/ezediniru-daniel_ox0xmi.png" />
        <meta name="twitter:image:alt" content="Ezediniru Daniel Website" />
      </Head>

      <div style={{
        backgroundImage: 'url("/background.svg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <Nav />
        <Social />
        <Component {...pageProps} />
        <Analytics />
      </div>

    </>
  )
}

