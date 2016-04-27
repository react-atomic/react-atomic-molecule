import React, {Component} from 'react'; 
import {
    assign,
    mixClass,
    reactStyle,
    SemanticUI
} from '../../src/index';

export default class ICON_X extends Component
{
  render()
  {
        var classes = mixClass(
            this.props.className
            ,'icon'
            ,'x'
        );
        return (
            <SemanticUI {...this.props} className={classes} styles={[Styles.close,this.props.styles]} style={
                assign(
                    this.props.style,
                    {
                        background: this.props.backgroud,
                        width: this.props.size,
                        height: this.props.size
                    }
                )
            }>
                <div styles={Styles.closeBefore} style={{
                    width: this.props.width,
                    height: this.props.size,
                    background: this.props.color
                }}></div>
                <div styles={Styles.closeAfter} style={{
                    width: this.props.size,
                    height: this.props.width,
                    background: this.props.color
                }}></div>
            </SemanticUI>
        );
  }
}
ICON_X.defaultProps = { 
    style: {},
    backgroud: '#fff',
    size: '1em',
    width: '.2em',
    color: '#333'
};

const Common = {
    closeBeforeAfter:{
        position:'absolute',
        left:'50%',
        top:'50%',
        transform: ['translate(-50%,-50%)']
    }
};

const Styles = {
    close: reactStyle({
        position:'absolute',
        right:'5px',
        top:'5px',
        cursor:'pointer',
        transform:['rotate(45deg)']
    }),
    closeBefore: reactStyle(
        assign(
            Common.closeBeforeAfter,
            { }
        )
    ),
    closeAfter: reactStyle(
        assign(
            Common.closeBeforeAfter,
            { }
        )
    )
    
};
