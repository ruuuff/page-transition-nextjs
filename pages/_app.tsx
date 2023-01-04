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

const textColors: { [key: string]: string } = {
  default: "text-gray-900",
  "/contact": "text-red-50",
  "/about": "text-white",
};

export default function App({ Component, pageProps, router }: AppProps) {
  const pathname = router.pathname;
  const color = textColors[pathname] || textColors.default;
  const [textColor, setTextColor] = useState(color);

  useEffect(() => {
    setTimeout(() => setTextColor(color), 400);
  }, [pathname]);

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
