'use strict';
const css = {
    fadeInLeft: [ 
        [
            {
                 opacity: 0,
                 transform: ['translate3d(-100%, 0, 0)']
            },
            {
                opacity: 1,
                transform: ['none']
            }
        ],
        [ 
            '@keyframes fadeInLeft',
            'from',
            'to'
        ]
    ],
};
export default css;
