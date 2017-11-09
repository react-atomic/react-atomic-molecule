'use strict';
const css = {
    fadeInUpBig: [
        [
            {
                opacity: .5,
                transform: ['translate3d(0, 2000px, 0)']
            },
            {
                opacity: 1,
                transform: ['none']
            }
        ],
        [
            '@keyframes fadeInUpBig',
            'from',
            'to'
        ]
    ],
};
export default css;
