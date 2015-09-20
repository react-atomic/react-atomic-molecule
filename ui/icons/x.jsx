var React = require('react');
var ReactStyle = require('../../src/lib/styles/index');
var AtomDiv = require('react-atomic-atom').span;
var mixClass = require('classnames');
var assign = require("react/lib/Object.assign");
var Touch = require('../molecules/tappable.jsx');

var Common = {
    closeBeforeAfter:{
        content:'',
        position:'absolute',
        left:'50%',
        marginLeft:'-.15em',
        transformOrigin:'center',
        webkitTransformOrigin:'center'
    }
};

var Styles = {
    close: ReactStyle({
        position:'absolute',
        right:'5px',
        top:'5px',
        cursor:'pointer'
    }),
    closeBefore: ReactStyle(
        assign(
            Common.closeBeforeAfter,
            {
                transform:'rotate(-40deg)',
                WebkitTransform:'rotate(-40deg)'
            }
        )
    ),
    closeAfter: ReactStyle(
        assign(
            Common.closeBeforeAfter,
            {
                transform:'rotate(40deg)',
                WebkitTransform:'rotate(40deg)'
            }
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
            <Touch {...this.props} className={classes} styles={Styles.close} style={
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
                    width: this.props.width,
                    height: this.props.size,
                    background: this.props.color
                }}></div>
            </Touch>
        );
  }
}
ICON_X.defaultProps = { 
    style: {},
    backgroud: '#fff',
    size: '1em',
    width: '.3em',
    color: '#333'
};

