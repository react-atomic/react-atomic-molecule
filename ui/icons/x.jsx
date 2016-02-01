var React = require('react');
var ReactStyle = require('../../src/lib/styles/index');
var AtomDiv = require('react-atomic-atom').span;
var mixClass = require('classnames');
var assign = require("react/lib/Object.assign");
var SemanticUI = require('../molecules/semantic_ui');

var Common = {
    closeBeforeAfter:{
        position:'absolute',
        left:'50%',
        top:'50%',
        transform: ['translate(-50%,-50%)']
    }
};

var Styles = {
    close: ReactStyle({
        position:'absolute',
        right:'5px',
        top:'5px',
        cursor:'pointer',
        transform:['rotate(45deg)']
    }),
    closeBefore: ReactStyle(
        assign(
            Common.closeBeforeAfter,
            { }
        )
    ),
    closeAfter: ReactStyle(
        assign(
            Common.closeBeforeAfter,
            { }
        )
    )
    
};

export default class ICON_X extends React.Component
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

