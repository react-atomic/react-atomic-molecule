import React, {Component} from 'react'; 
import {
    lazyInject,
    reactStyle,
    SemanticUI,
} from 'react-atomic-molecule';
import getKeyframe from 'keyframe-css';

const Pulse = (props) =>
<SemanticUI style={Styles.pulse}>
    <SemanticUI styles={[injects.pulsePoint, props.pointStyle]} />
    <SemanticUI styles={[injects.pulseRing, props.ringStyle]} />
</SemanticUI>

const PulseIcon = (props) =>
{
    let pointStyle=reactStyle({
        background: props.pointColor,
        transform: ['rotateX('+props.pointRotateX+'deg)']
    },null,false);
    let ringStyle=reactStyle({
        boxShadow: ['0 0 1px 2px '+props.ringColor]
    },null,false);
    getKeyframe('pulsate');
    injects = lazyInject (
        injects,
        InjectStyles
    );
    return (
        <Pulse
            pointStyle={pointStyle}
            ringStyle={ringStyle}
        />
    );
}

PulseIcon.defaultProps = {
    pointColor: 'rgba(5,80,255,0.9)',
    pointRotateX: 0,
    ringColor: '#89849b'
};

export default PulseIcon;

const Styles = {
    pulse: {
        position: 'relative',
        zIndex: 1,
        display: 'inline-block'
    },
};

let injects;
const InjectStyles = {
    pulsePoint: [{
        borderRadius: ['50%'],
        height: '14px',
        width: '14px',
        margin: '11px 0px 0px -12px',
        position: 'absolute',
        top: '-10px',
        left: '12px'
    }],
    pulseRing: [{
        borderRadius: ['50%'],
        width: '40px',
        height: '40px',
        position: 'absolute',
        margin: '-13px 0 0 -13px',
        animation: ['pulsate 1s ease-out'],
        animationIterationCount: ['infinite'],
        opacity: 0,
        filter: 'alpha(opacity=0)',
        msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)',
        animationDelay: ['1.1s']
    }]
};
