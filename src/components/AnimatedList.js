import posed from 'react-pose';

const AnimatedList = posed.ul({
  // On start, closed position, to the left of the screen
  initialPose: 'closed',
  open: {
    // On open, go back to standard position, no translate on the x axis
    x: "0%",
    // Delay animating children by 200ms
    delayChildren: 200,
    // Delay each child by 200ms
    staggerChildren: 200
  },
  closed: {
    // on closed, move the list the left on x axis
    x: "-300%",
    // Delay the whole list animation on exit
    delay: 300,
    // Delay each child on exit
    staggerChildren: 100,
  }
});

export default AnimatedList;