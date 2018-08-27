import posed from 'react-pose';

const AnimatedListItem = posed.li({
  initialPose: 'closed',
  open: { opacity: 1, y: 0 }, // Change opacity, fade in
  closed: { opacity: 0, y: 20 } //fade out and go down 20px
});

export default AnimatedListItem;