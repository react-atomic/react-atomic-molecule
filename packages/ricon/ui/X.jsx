import React from 'react'; 
import {
    lazyInject,
    mixClass,
    SemanticUI
} from 'react-atomic-molecule';

let injects;

const ICON_X = (props)=> {
    injects = lazyInject (
        injects,
        InjectStyles
    );
    const {weight, size, className, color, style, ...others} = props;
    const classes = mixClass(
        className
        ,'icon'
        ,'x'
    );
    const lineStyle = {
        width: weight,
        height: size,
        background: color
    };
    return (
        <SemanticUI
            className={classes}
            {...others}
            style={{
                width: size,
                height: size,
                ...Styles.container,
                ...style
            }}
        >
            <SemanticUI
                styles={injects.line}
                style={lineStyle}
            >
                <SemanticUI 
                    styles={injects.line2}
                    style={lineStyle}
                />
            </SemanticUI>
        </SemanticUI>
    );
}
ICON_X.defaultProps = { 
    style: {},
    size: '1rem',
    weight: '.2rem',
    color: '#333'
};

export default ICON_X;

const Styles = {
    container: {
        background: 'transparent',
        position: 'absolute',
        top: '5px',
        right: '5px',
        cursor:'pointer',
    }
};

const InjectStyles = {
    line: [{
        position:'absolute',
        left:'50%',
        top:'50%',
        transform: ['translate(-50%,-50%) rotate(45deg)']
    }],
    line2: [{
        transform:['rotate(90deg)']
    }]
};
