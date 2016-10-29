import React from 'react'; 
import {
    SemanticUI
} from '../../src/index';

const UnSafe = (props) =>
{
    const {children, ...others} = props; 
    return (
        <SemanticUI
            {...others}
            dangerouslySetInnerHTML={{
                __html: children
            }}
        />
    );
};

export default UnSafe;
