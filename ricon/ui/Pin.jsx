import React from 'react'; 
import {
    lazyInject,
    Card,
    Content,
    SemanticUI,
    Header,
} from 'react-atomic-molecule';

const Pin = (props) => 
{
    const {open, header, children, label, ...others} = props;
    injects = lazyInject (
        injects,
        InjectStyles
    );
    let pinStyles = [injects.pin];
    let pinContent = null;
    if (open) {
        pinStyles=[injects.pin,injects.pinOpen];
        let thisHeader = null;
        if (header) {
            thisHeader = <Header style={Styles.header}>{header}</Header> 
        }
        pinContent = <Card style={{
            background: pinOpenBackground
        }}>
            <Content>
                {thisHeader}
                {children}
            </Content>
        </Card>;
    }
    const thisLabel = (label) ?
        <div style={Styles.label}>{label}</div>:
        <div style={Styles.point} />;

    return (
        <SemanticUI style={Styles.container} {...others}>
            <SemanticUI styles={pinStyles} >
                {pinContent}
            </SemanticUI>
            {thisLabel}
        </SemanticUI>
    )
}

export default Pin;

const pinOpenBackground = '#c4c1cd';
const Styles = {
    container: {
        position: 'relative',
        display: 'inline-block'
    },
    header: {
        marginLeft: '20px'
    },
    label: {
        position: 'absolute',
        top:'7px',
        left:'-16px'
    },
    point: {
        width:'14px',
        height:'14px',
        margin: '8px 0 0 8px',
        background: '#2f2f2f',
        position: 'absolute',
        top:0,
        borderRadius: '50%'
    }
};

let injects;
const InjectStyles = {
    pin: [{
        width: '30px',
        height: '30px',
        borderRadius: ['50% 50% 50% 0'],
        background: '#89849b',
        transform: ['rotate(-45deg)'],
        transition: ['all 0.25s ease-in-out']
    }],
    pinOpen: [{
        width: '250px',
        height: 'auto',
        borderRadius: ['5px'],
        transform: ['rotate(0)'],
    }]
};
