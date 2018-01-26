import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

import Path from './Path';

const samePath1 = 'c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68';
const samePath = samePath1+ 'C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2';

const Notification = ({type, ...props}) =>
<SemanticUI {...props}>
    { (() => {
        let d;
        switch (type) {
            case 'active':
                d = 'M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11'+samePath+'v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z';
                break;
            case 'none':
                d = 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5'+samePath+'zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z';
                break;
            case 'off':
                d = 'M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11'+samePath1+'c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z';
                break;
            case 'paused':
                d = 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5'+samePath+'zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z';
                break;
            default:
                d = 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5'+samePath+'z';
                break;
        }
        return (
            <Path d={d} />
        );
    })()}
</SemanticUI>

Notification.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Notification;
