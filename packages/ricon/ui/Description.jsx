import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const IcoDescription = (props) => (
<SemanticUI {...props}>
    <SemanticUI atom="path" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
</SemanticUI>
);

IcoDescription.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default IcoDescription;
