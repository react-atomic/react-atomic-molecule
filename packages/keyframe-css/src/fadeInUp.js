'use strict';
const css = {
    fadeInUp: [
        [
            {
                opacity: 0,
                transform: ['translate3d(0, 100%, 0)']
            },
            {
                opacity: 1,
                transform: ['none']
            }
        ],
        [
            '@keyframes fadeInUp',
            'from',
            'to'
        ]
    ],
};
export default css;
