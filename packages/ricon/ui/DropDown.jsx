import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const ArrowPath = (props) => (
    <SemanticUI
        atom="path"
        d="M7 10l5 5 5-5z"
        {...props}
    />
);

const DropDown = ({up, ...props}) => { 
    let transform = null;
    if (up) {
        transform = "rotate(180,12,13)";
    }
    return (
        <SemanticUI {...props}>
            <ArrowPath transform={transform} />
        </SemanticUI>
    );
};

DropDown.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export {ArrowPath};
export default DropDown;
