import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const DropDown = (props) => (
<SemanticUI {...props}>
    <SemanticUI atom="path" d="M7 10l5 5 5-5z" />
    <SemanticUI atom="path" d="M0 0h24v24H0z" fill="none" />
</SemanticUI>
);

DropDown.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg'
};

export default DropDown;