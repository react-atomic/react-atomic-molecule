/* jshint esnext: true */
import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const Hamburger = (props) => 
{
    const {line1, line2, line3, ...others} = props;
    return (
      <SemanticUI {...others}>
        <SemanticUI atom="path" styles={line1} d="M3,6v2h18V6H3z" />
        <SemanticUI atom="path" styles={line2} d="M3,13h18v-2H3V13z" />
        <SemanticUI atom="path" styles={line3} d="M3,18h18v-2H3V18z" />
      </SemanticUI>
    );
};

Hamburger.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg'
};

export default Hamburger;
