import React from 'react';
import Svg from './Svg';
import Path from './Path';

const ArrowPath = props => (
    <Path
        d="M7 10l5 5 5-5z"
        {...props}
    />
);

const Dropdown = ({type, ...props}) => { 
    let transform = null;
    switch (type) {
        case 'up':
            transform = "rotate(180,12,13)";
            break;
        case 'left':
            transform = "rotate(90,12,13)";
            break;
        case 'right':
            transform = "rotate(270,12,13)";
            break;
    }
    return (
        <Svg {...props}>
            <ArrowPath transform={transform} />
        </Svg>
    );
};

export {ArrowPath};
export default Dropdown;
