import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

import {ArrowPath} from './DropDown';

const Sort = (props) =>
<SemanticUI {...props}>
    <ArrowPath transform="rotate(180,12,9) translate(0,-3)"/>
    <ArrowPath transform="translate(0,3)"/>
</SemanticUI>

Sort.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Sort;
