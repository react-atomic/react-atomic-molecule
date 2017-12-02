import React, {Component} from 'react'; 
import {
    lazyInject,
    reactStyle,
    SemanticUI,
} from 'react-atomic-molecule';
import pulsate from 'keyframe-css/pulsate';
import breath from 'keyframe-css/breath';

const Pulse = ({style, pointStyle, ringStyle}) =>
<SemanticUI style={style}>
    <SemanticUI styles={[injects.pulsePoint, pointStyle]} />
    <SemanticUI styles={[injects.pulseRing, ringStyle]} />
</SemanticUI>

const PulseIcon = ({style, pointColor, pointRotateX, ringColor, animation}) =>
{
    const pointStyle = reactStyle({
        background: pointColor,
        transform: ['translate(-50%,-50%) rotateX('+ pointRotateX+ 'deg)']
    },null,false);

    const ringStyle = reactStyle({
        boxShadow: ['0 0 1px 2px '+ ringColor],
        animation: [animation+' 1s ease-out'],
        animationIterationCount: ['infinite']
    },null,false);

    injects = lazyInject (
        injects,
        InjectStyles
    );

    return (
        <Pulse
            style={{...Styles.pulse, ...style}}
            pointStyle={pointStyle}
            ringStyle={ringStyle}
        />
    );
}

PulseIcon.defaultProps = {
    pointColor: 'rgba(5,80,255,0.9)',
    pointRotateX: 0,
    ringColor: '#89849b',
    animation: 'pulsate'
};

export default PulseIcon;

const Styles = {
    pulse: {
        position: 'relative',
        zIndex: 1,
        display: 'inline-block',
        width: 40,
        height: 40,
    },
};

let injects;
const InjectStyles = {
    pulsePoint: [{
        borderRadius: ['50%'],
        height: 14,
        width: 14,
        position: 'absolute',
        top: '50%',
        left: '50%',
    }],
    pulseRing: [{
        borderRadius: ['50%'],
        height: '100%',
        opacity: 0,
        filter: 'alpha(opacity=0)',
        msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)',
    }],
    pulsateKeyframe: pulsate.pulsate, 
    breathKeyframe: breath.breath
};
