import base from './base';

const Reply = ({type, style, ...props}) => {
  const d = 'M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z';
  switch (type) {
    case 'right':
      props.style = {...style, transform: 'scaleX(-1)'};
      break;
  }
  return base('Reply')(d)(props);
};

export default Reply;
