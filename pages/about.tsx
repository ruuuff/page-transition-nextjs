import { motion } from "framer-motion";
import { pageTransition } from "../animations";

export default function Abount() {
  return (
    <motion.div
      {...pageTransition}
      className="absolute left-0 right-0 top-0 min-h-screen bg-blue-500 px-4"
    >
      <main className="max-w-6xl mx-auto pb-12">
        <div className="h-screen flex items-center">
          <div className="w-full overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-6xl text-center lg:text-right lg:text-7xl 2xl:text-8xl"
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
