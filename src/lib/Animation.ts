export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

export const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cardHoverVariants = {
  rest: { scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

export const iconRotateVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 8,
    scale: 1.1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

export const bounceInVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
};

export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
