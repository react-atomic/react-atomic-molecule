'use strict';
const css = {
    fadeOutDown: [
        [
            {
                opacity: 1,
            },
            {
                opacity: 0,
                transform: ['translate3d(0, 100%, 0)']
            }
        ],
        [
            '@keyframes fadeOutDown',
            'from',
            'to'
        ]
    ],
};
export default css;
