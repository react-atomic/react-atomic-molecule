import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

import Path from './Path';

const Play = (props) =>
<SemanticUI {...props}>
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
</SemanticUI>

Play.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Play;
