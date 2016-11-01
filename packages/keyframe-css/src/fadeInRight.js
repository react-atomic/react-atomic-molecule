'use strict';
const css = {
    fadeInRight: [
        [
            {
                opacity: 0,
                transform: ['translate3d(100%, 0, 0)']
            },
            {
                opacity: 1,
                transform: ['none']
            }
        ],
        [
            '@keyframes fadeInRight',
            'from',
            'to'
        ]
    ],
};
export default css;
