import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
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

export const pathPalette: { [key: string]: { bg: string; text: string } } = {
  default: {
    bg: "bg-blue-500",
    text: "text-white",
  },
  "/contact": {
    bg: "bg-orange-300",
    text: "text-black",
  },
  "/about": {
    bg: "bg-lime-600",
    text: "text-white",
  },
};

export default function App({ Component, pageProps, router }: AppProps) {
  const pathname = router.pathname;
  const color = pathPalette[pathname]?.text || pathPalette.default.text;
  const [textColor, setTextColor] = useState(color);

  useEffect(() => {
    setTimeout(() => setTextColor(color), 400);
  }, [color]);

  console.log("render");

  return (
    <div className={`${lato.variable} font-lato ${textColor}`}>
      <Head>
        <title>Page Transition - ruuuff</title>
        <meta
          name="description"
          content="Page transition with Next.js and Framer Motion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar currentPath={pathname} />

      <AnimatePresence initial={false}>
        <Component key={pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
