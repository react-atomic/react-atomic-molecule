import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

import Path from './Path';

const Home = (props) =>
<SemanticUI {...props}>
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
</SemanticUI>

Home.defaultProps = {
    viewBox: '0 0 24 24',
    atom: 'svg',
    width: '100%'
};

export default Home;
