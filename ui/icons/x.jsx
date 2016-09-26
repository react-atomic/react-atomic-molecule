import React, {Component} from 'react'; 
import {
    assign,
    mixClass,
    reactStyle,
    SemanticUI
} from '../../src/index';

let injects;

export default class ICON_X extends Component
{
    constructor(props) 
    {
        super(props);
        if (!injects) {
            injects = {};
            const keys = Object.keys(InjectStyles);
            keys.forEach((key)=>{
                let item = InjectStyles[key];
                injects[key] = reactStyle.apply(
                    null,
                    item
                );
            });
        }
    }

  render()
  {
        var classes = mixClass(
            this.props.className
            ,'icon'
            ,'x'
        );
        const {weight, size, ...props} = this.props;
        return (
            <SemanticUI
                className={classes}
                {...props}
                style={assign(
                    { },
                    Styles.container,
                    this.props.style
                )}
            >
                <SemanticUI
                    styles={injects.box} 
                    style={{
                        width: this.props.size,
                        height: this.props.size,
                    }}
                >
                    <SemanticUI
                        styles={injects.line}
                        style={{
                            width: weight,
                            height: size,
                            background: this.props.color,
                            fontSize:0,
                            lineHeight:0
                        }}
                    />
                    <SemanticUI 
                        styles={injects.line}
                        style={{
                            width: size,
                            height: weight,
                            background: this.props.color,
                            fontSize:0,
                            lineHeight:0
                        }}
                    />
                </SemanticUI>
            </SemanticUI>
        );
  }
}
ICON_X.defaultProps = { 
    style: {},
    size: '1rem',
    weight: '.2rem',
    color: '#333'
};

const Styles = {
    container: {
        background: 'transparent',
        position: 'absolute',
        top: '5px',
        right: '5px',
    }
};

const InjectStyles = {
    box: [{
        cursor:'pointer',
        transform:['rotate(45deg)']
    }],
    line: [{
        position:'absolute',
        left:'50%',
        top:'50%',
        transform: ['translate(-50%,-50%)']
    }]
};
