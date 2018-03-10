import React from 'react';
import Svg from './Svg';
import Path from './Path';

const File = ({children, background, shadowColor, labelBackground, labelColor, ...props}) =>
<Svg viewBox="0 0 26 26" {...props}>
    <Path
        d="m6 3.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z"
        fill={shadowColor}
    />
    <Path
        d="m6 2.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z"
        fill={background}
    />
    <Path 
        d="m22 8.4-6-6v4c0 1.1 0.895 2 2 2h4z"
        fill={shadowColor}
    />
    <rect width="17" height="10.5"  y="11" x="1" rx="1"
        fill={labelBackground}
    />
    <text fill={labelColor} style={Styles.label} fontSize="10" transform="translate(9, 9)">
        <tspan x="0" dy="1em" textAnchor="middle">{children}</tspan>
    </text>
</Svg>

File.defaultProps = {
    background: '#e1e1e1',
    shadowColor: '#7f7f7f',
    labelBackground: '#000',
    labelColor: '#fff',
};

export default File;

const Styles = {
    label: {
        fontFamily: 'PoiretOne-Regular, Poiret One',
    }
};
