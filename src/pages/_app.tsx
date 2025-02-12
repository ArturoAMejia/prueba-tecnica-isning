import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Vintage Outdoors</title>
          <meta name="description" content="Short app description" />

          <meta
            name="keywords"
            content="Outdoors, Vintage, Pool, Vintage Outdoors, "
          />
          <meta name="author" content="Vintage Outdoors" />
          <meta name="robots" content="index" />

          <meta property="og:title" content="Vintage Outdoors" />
          <meta
            property="og:description"
            content="Vintage Outdoors landing page"
          />
          <meta
            property="og:image"
            content="https://prueba-tecnica-isning.vercel.app/logo.png"
          />
          <meta
            property="og:url"
            content="https://prueba-tecnica-isning.vercel.app/"
          />
          <meta property="og:type" content="website" />

          <meta name="theme-color" content="#ffffff" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Vintage Outdoors" />
        </Head>
      </Head>
      <main className={`${montserrat.variable} font-montserrat`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
