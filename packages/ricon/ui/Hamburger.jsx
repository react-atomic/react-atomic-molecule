import React from 'react';
import Svg from './Svg';
import Path from './Path';
import G from './G';

const Hamburger = ({line1, line2, line3, transform, ...props}) => (
  <Svg {...props}>
    <G transform={transform}>
      <Path styles={line1} d="M3,6v2h18V6H3z" />
      <Path styles={line2} d="M3,13h18v-2H3V13z" />
      <Path styles={line3} d="M3,18h18v-2H3V18z" />
    </G>
  </Svg>
);

export default Hamburger;
