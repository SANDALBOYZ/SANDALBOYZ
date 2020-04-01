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

/**
 * Standard entry animation for `pages` components.
 * @param delay <Number>
 * @param duration <Number>
 * @param ease <Array>
 */
export const fadeInEntry = ({ delay, duration, ease } = {}) => ({
  initial: { opacity: 0, y: '-5px', scale: 1.005 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: ease || [0.19, 1, 0.22, 1],
      duration: duration || 0.8,
      delay: delay || 0.5,
    },
  },
});
