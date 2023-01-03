import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full min-h-full bg-orange-100 px-16 lg:px-48"
    >
      <main>
        <div className="my-96 p-1">
          <h1 className="text-6xl text-center lg:text-right lg-text-9xl">
            Happy Pickle
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2023</h2>
          </div>
          <div>
            <h3>This pickle gonna make you smile.</h3>
            <h3>Scottish designs to make you happy.</h3>
            <h3>Click contact for cool transition.</h3>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
