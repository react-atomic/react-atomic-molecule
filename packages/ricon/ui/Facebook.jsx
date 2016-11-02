import React from 'react'; 
import { SemanticUI } from 'react-atomic-molecule';

const Facebook = (props) => 
{
    return (
        <SemanticUI {...props}>
            <SemanticUI atom="path" d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1 C13.402,7,13,7.402,13,7.899V10z"/>
        </SemanticUI>
    );
};

Facebook.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Facebook;
