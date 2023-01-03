import { motion } from "framer-motion";
import { container, item } from "../animations";

export default function Contact() {
  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full min-h-full bg-red-400 px-16 lg:px-48"
    >
      <div className="my-96 p-1 overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center lg:text-right lg-text-9xl"
        >
          Let's Talk
        </motion.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="lg:text-6xl text-2xl underline">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2 pb-2"
          >
            {["Twitter", "Instagram", "LinkedIn", "Dribble"].map((social) => (
              <li className="overflow-hidden">
                <motion.div variants={item}>{social}</motion.div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.main>
  );
}
