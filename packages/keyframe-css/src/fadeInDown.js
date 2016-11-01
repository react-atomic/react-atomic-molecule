'use strict';
const css = {
    fadeInDown: [
        [
            {
                opacity: 0,
                transform: ['translate3d(0, -100%, 0)']
            },
            {
                opacity: 1,
                transform: ['none']
            }
        ],
        [
            '@keyframes fadeInDown',
            'from',
            'to'
        ]
    ],
};
export default css;
