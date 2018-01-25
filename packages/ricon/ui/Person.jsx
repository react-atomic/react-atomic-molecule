import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

import Path from './Path';

const samePath = 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4';

const Person = ({type, ...props}) =>
<SemanticUI {...props}>
    {(() =>{
        switch(type) {
            case 'add': 
                return <Path d={samePath+ ' 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'}/>;
            default :
                return <Path d={samePath+ ' 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'} />;
        }
    })()}
</SemanticUI>


Person.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Person;
