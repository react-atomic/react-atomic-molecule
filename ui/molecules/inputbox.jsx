/* jshint esnext: true */
var React = require('react');
var reactStyle = require('../../src/lib/styles/index');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var mixClass = require('classnames');

    var Styles = {
        inputbox:{
            webkitTapHighlightColor:'rgba(255,255,255,0)',
            padding:'.67861em 1em',
            background:'#fff',
            border:'1px solid rgba(0,0,0,.15)',
            color:'rgba(0,0,0,.8)',
            transition:'background-color .2s ease,box-shadow .2s ease,border-color .2s ease',
            webkitTransition:'background-color .2s ease,box-shadow .2s ease,border-color .2s ease',
            boxShadow:'none'
        },
        myAction:{
            borderRight:'none',
            borderTopRightRadius:'0!important',
            borderBottomRightRadius:'0!important'
        }
    };

module.exports = React.createClass({
  displayName: 'InputBox',


  getDefaultProps: function() {
    return ({
        ui:true
    });
  },
  render: function() {
    var props=this.props;
    var classes=mixClass('input');
    var inputboxStyle=reactStyle(Styles.inputbox,'.ui.input input');
    reactStyle(Styles.myAction,'.ui.action.input:not([class*="left action"])>div input');
    return (
      <SemanticUI className={classes} style={{width:"100%"}}>
        <SemanticUI atom='input' styles={inputboxStyle} {...props} ui=""  />
      </SemanticUI>
    );
  }

});

