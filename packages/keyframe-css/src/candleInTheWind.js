'use strict';
const css = {
    candleInTheWindCss:
    [
        {
            opacity: 0,
            animationFillMode: 'forwards'
        },
        '.candleInTheWind'
    ],
    candleInTheWindKeyframes: 
    [
        [
            {
                opacity: 0
            },
            {
                opacity: 0.25,
                transform: ['skewX(-10deg)']
            },
            {
                opacity: 0
            },
            {
                opacity: 0,
                transform: ['skewX(-10deg)']
            },
            {
                opacity: 0.75,
            },
            {
                opacity: 0
            },
            {
                opacity: 1,
                transform: ['skewX(-5deg)']
            },
            {
                opacity: 0.5
            },
            {
                opacity: 1 
            },
        ],
        [
            '@keyframes candleInTheWind',
            '0%',
            '12.5%',
            '25%',
            '37.5%',
            '50%',
            '62.5%',
            '75%',
            '87.5%',
            '100%'
        ]
    ]
};
export default css;
