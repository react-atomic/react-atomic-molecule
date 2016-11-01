'use strict';
const css = {
    fadeOutUp: [
        [
            {
                opacity: 1,
            },
            {
                opacity: 0,
                transform: ['translate3d(0, -100%, 0)']
            }
        ],
        [
            '@keyframes fadeOutUp',
            'from',
            'to'
        ]
    ],
};
export default css;
