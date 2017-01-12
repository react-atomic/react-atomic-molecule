import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const ChevronRight = (props) =>
<SemanticUI {...props}>
    <SemanticUI atom="path" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
</SemanticUI>

ChevronRight.defaultProps = {
    viewBox: '0 0 16 16',
    atom: 'svg',
    width: '100%'
};

export default ChevronRight;
