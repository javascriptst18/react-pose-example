import posed from 'react-pose';

const Box = posed.div({
  visible: {
    opacity: 1,
    translateX: "0%",
    rotate: "0deg"
  },
  hidden: {
    opacity: 0,
    translateX: "100%",
    rotate: "180deg"
  }
});

export default Box;