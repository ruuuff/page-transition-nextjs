export const pageTransition = {
  initial: { y: "100vh" },
  animate: { y: 0 },
  transition: { duration: 0.75, ease: "easeOut" },
  exit: { opacity: 1 },
};

export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.25,
    },
  },
};

export const item = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
