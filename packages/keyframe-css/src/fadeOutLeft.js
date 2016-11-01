'use strict';
const css = {
    fadeOutLeft: [
        [
            {
                opacity: 1,
            },
            {
                opacity: 0,
                transform: ['translate3d(-100%, 0, 0)']
            }
        ],
        [
            '@keyframes fadeOutLeft',
            'from',
            'to'
        ]
    ],
};
export default css;
