import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

import { Lato } from "@next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${lato.variable} font-lato text-gray-900`}>
      <Head>
        <title>Page Transition - ruuuff</title>
        <meta
          name="description"
          content="Page transition with Next.js and Framer Motion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar currentPath={router.pathname} />

      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
