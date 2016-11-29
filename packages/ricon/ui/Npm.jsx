import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const Npm = (props) =>
<SemanticUI {...props}>
 <SemanticUI atom="path" d="M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z"/>
</SemanticUI>

Npm.defaultProps = {
    viewBox: '0 0 3200 3200',
    fill: '#b93131',
    atom: 'svg',
    width: '100%'
};

export default Npm;
