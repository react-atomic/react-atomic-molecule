import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const UnSafe = ({className, children, ...others}) =>
<SemanticUI
    {...others}
    className={mixClass('us-html', className)}
    dangerouslySetInnerHTML={{
        __html: children
    }}
/>

export default UnSafe;
