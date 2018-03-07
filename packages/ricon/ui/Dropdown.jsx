import React from 'react';
import Svg from './Svg';
import Path from './Path';

const ArrowPath = (props) => (
    <Path
        d="M7 10l5 5 5-5z"
        {...props}
    />
);

const Dropdown = ({type, ...props}) => { 
    let transform = null;
    if ('up'===type) {
        transform = "rotate(180,12,13)";
    }
    return (
        <Svg {...props}>
            <ArrowPath transform={transform} />
        </Svg>
    );
};

export {ArrowPath};
export default Dropdown;
