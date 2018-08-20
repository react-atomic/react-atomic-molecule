import React from 'react'
import Svg from './Svg'
import G from './G'
import CircleTag from './Circle'
import { lazyInject } from 'react-atomic-molecule'

const Circle = ({rotate, delay, ...props}) =>
{
    if (rotate) {
        rotate = ` rotate(${rotate} 0 13)`
    } else {
        rotate = ''
    }
    const circleStyle = {}
    if (delay) {
        circleStyle.animationDelay = delay+'s'
    }
    return (
    <G
        transform={`translate(16, 3)${rotate}`}
    >
        <CircleTag
            r="3"
            style={circleStyle}
            styles={injects.loading}
        />
    </G>
    )
}

const CircleLoading = props =>
{
    injects = lazyInject (
        injects,
        InjectStyles
    )
    return (
    <Svg {...props} viewBox="0 0 32 32">
        <Circle />
        <Circle rotate={45} delay={0.125} />
        <Circle rotate={90} delay={0.25} />
        <Circle rotate={135} delay={0.375} />
        <Circle rotate={180} delay={0.5} />
        <Circle rotate={225} delay={0.625} />
        <Circle rotate={270} delay={0.75} />
        <Circle rotate={315} delay={0.875} />
    </Svg>
    )
}

export default CircleLoading

let injects
const InjectStyles = {
    loading: [{
        animation: ['scale-ani 1s infinite linear']
    }],
    scaleAni: [
        [
            {
               transform: ['scale(1)'] 
            },
            {
               transform: ['scale(0)'] 
            }
        ],
        ['@keyframes scale-ani','0%','100%']
    ]
}
