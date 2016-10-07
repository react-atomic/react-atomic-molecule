/* jshint esnext: true */
import React from 'react';
import {
    reactStyle,
    SemanticUI
} from 'react-atomic-molecule';

const HamburgerIcon = (props) => 
{
    const {line, line1, line2, line3, ...others} = props;
    return (
      <svg {...others}>
        <SemanticUI atom="path" styles={[line, line1]} d="M3,6v2h18V6H3z" />
        <SemanticUI atom="path" styles={[line, line2]} d="M3,13h18v-2H3V13z" />
        <SemanticUI atom="path" styles={[line, line3]} d="M3,18h18v-2H3V18z" />
      </svg>
    );
};

HamburgerIcon.defaultProps = {
    viewBox: '0 0 24 24'
};

export default HamburgerIcon;
