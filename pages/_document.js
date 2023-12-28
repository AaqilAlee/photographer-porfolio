import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        {/* <!-- Required meta tags for responsive --> */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        {/* page description */}
        <title>Global Heavens | Ecommerce</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_p/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_p/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_p/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content="Generated by Mamun" />
        <meta name="keywords" content="Keywords" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Global Heavens MB Pvt Ltd." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Global Heavens MB Pvt Ltd." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="#" />
        <meta name="twitter:title" content="Global Heavens MB Pvt Ltd." />
        <meta name="twitter:description" content="#" />
        <meta name="twitter:image" content="#" />
        <meta name="twitter:creator" content="#" />
        {/* <!-- Open Graph data --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global Heavens MB Pvt Ltd." />

        <meta name="google-site-verification" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}