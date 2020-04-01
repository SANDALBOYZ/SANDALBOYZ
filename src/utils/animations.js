export const fadeInRight = () => ({
  initial: { opacity: 0, x: '8px' },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.19, 1, 0.22, 1],
      duration: 1.5,
      delay: 0.5,
    },
  },
});

export const fadeInEntry = () => ({
  initial: { opacity: 0, y: '-5px', scale: 1.005 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.19, 1, 0.22, 1],
      duration: 0.8,
      delay: 0.5,
    },
  },
});
