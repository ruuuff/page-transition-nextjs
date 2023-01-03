import { motion, AnimatePresence } from "framer-motion";
import { pageTransition, container, item } from "../animations";

export default function Contact() {
  return (
    <motion.div
      {...pageTransition}
      className="absolute left-0 right-0 top-0 min-h-screen bg-red-400 px-4"
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
              Let's Talk
            </motion.h1>
          </div>
        </div>

        <div className="flex gap-16 lg:gap-24 2xl:gap-36">
          <div className="text-base lg:text-2xl 2xl:text-3xl">
            <h4>Find me:</h4>
          </div>
          <div className="text-2xl lg:text-4xl 2xl:text-6xl underline">
            <AnimatePresence initial={true}>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                className="flex flex-col gap-2"
              >
                {["Twitter", "Instagram", "LinkedIn", "Dribble"].map(
                  (social) => (
                    <li key={social} className="overflow-hidden">
                      <motion.div variants={item} className="pb-1">
                        {social}
                      </motion.div>
                    </li>
                  )
                )}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
