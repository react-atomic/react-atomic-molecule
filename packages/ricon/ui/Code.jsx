import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const Code = (props) =>
<SemanticUI {...props}>
    <SemanticUI atom="path" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
</SemanticUI>

Code.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Code;
