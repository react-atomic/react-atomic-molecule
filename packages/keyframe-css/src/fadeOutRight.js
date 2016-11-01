'use strict';
const css = {
    fadeOutRight: [
        [
            {
                opacity: 1,
            },
            {
                opacity: 0,
                transform: ['translate3d(100%, 0, 0)']
            }
        ],
        [
            '@keyframes fadeOutRight',
            'from',
            'to'
        ]
    ],
};
export default css;
