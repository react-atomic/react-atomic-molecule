import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const Warning = (props) =>
<SemanticUI {...props}>
    <SemanticUI atom="path" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
</SemanticUI>

Warning.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Warning;
