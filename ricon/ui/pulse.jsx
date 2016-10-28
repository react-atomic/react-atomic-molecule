import React, {Component} from 'react'; 
import {
    SemanticUI,
    reactStyle
} from '../../src/index';

const Pulse = (props) =>
<SemanticUI style={Styles.pulse}>
    <div styles={[Styles.pulsePoint, props.pointStyle]} />
    <div styles={[Styles.pulseRing, props.ringStyle]} />
</SemanticUI>

export default class PulseIcon extends Component
{
    render()
    {
        let pointStyle=reactStyle({
            background: this.props.pointColor,
            transform: ['rotateX('+this.props.pointRotateX+'deg)']
        });
        let ringStyle=reactStyle({
            boxShadow: ['0 0 1px 2px '+this.props.ringColor]
        });
        return (
            <Pulse
                pointStyle={pointStyle}
                ringStyle={ringStyle}
            />
        );
    }
}

PulseIcon.defaultProps = {
    pointColor: 'rgba(5,80,255,0.9)',
    pointRotateX: 0,
    ringColor: '#89849b'
};

const Styles = {
    pulse: {
        position: 'relative',
        zIndex: 1
    },
    pulsePoint: reactStyle({
        borderRadius: ['50%'],
        height: '14px',
        width: '14px',
        margin: '11px 0px 0px -12px',
        position: 'absolute',
        top: '-10px',
        left: '12px'
    }),
    pulseRing: reactStyle({
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
    }),
    pulsate: reactStyle([
        {
            transform: ['scale(0.1, 0.1)'],
            opacity: 0,
            filter: 'alpha(opacity=0)',
            msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'
        },
        {
            opacity: 1,
            filter: 'none',
            msFilter: 'none',
        },
        {
            transform: ['scale(1.2, 1.2)'],
            filter: 'alpha(opacity=0)',
            msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'
        }
    ],['@keyframes pulsate', '0%', '50%', '100%']) 

};
