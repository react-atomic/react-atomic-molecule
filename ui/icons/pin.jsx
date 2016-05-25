import {
    React,
    Component,
    SemanticUI,
    reactStyle
} from '../../src/index';

const PIN = (props) =>
<div></div>

const PULSE = (props) =>
<SemanticUI style={Styles.pulse}>
    <div styles={Styles.pulsePoint}></div>
    <div styles={Styles.pulseRing}></div>
</SemanticUI>

export default class PinIcon extends Component
{
    render()
    {
        return (
            <PULSE />
        );
    }
}

const Styles = {
    pulse: {
        position: 'absolute',
        top:'50%',
        left:'50%'
    },
    pulsePoint: reactStyle({
        background: 'rgba(0,0,0,0.2)',
        borderRadius: ['50%'],
        transform: ['rotateX(55deg)'],
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
        boxShadow: ['0 0 1px 2px #89849b'],
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
