import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const Svg = (props) =>
<SemanticUI {...props} />

Svg.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Svg;
