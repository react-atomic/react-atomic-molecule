/* jshint esnext: true */
import * as Atoms from 'react-atomic-atom';
var React = require('react');
var mixStyle = require('../../src/lib/styles/mixin');
var assign = require("react/lib/Object.assign");
var mixClass = require('classnames');

module.exports = React.createClass({
  displayName: 'SemanticUI',
  getDefaultProps: function() {
    return ({
        ui:true,
        renderChildren:true
    });
  },
  render: function() {
    var ui=this.props.ui;
    var renderChildren=this.props.renderChildren;
    var SemanticUI;
    var classes = [];
    if(ui){
        classes.push('ui');
    }
    switch (this.props.atom){
        case 'h1':
            SemanticUI = Atoms.H1;
            break;
        case 'h2':
            SemanticUI = Atoms.H2;
            break;
        case 'h3':
            SemanticUI = Atoms.H3;
            break;
        case 'h4':
            SemanticUI = Atoms.H4;
            break;
        case 'h5':
            SemanticUI = Atoms.H5;
            break;
        case 'h6':
            SemanticUI = Atoms.H6;
            break;
        case 'ol':
            SemanticUI = Atoms.Ol;
            break;
        case 'ul':
            SemanticUI = Atoms.Ul;
            break;
        case 'nav':
            SemanticUI = Atoms.Nav;
            break;
        case 'button':
            SemanticUI = Atoms.Button;
            break;
        case 'form':
            SemanticUI = Atoms.Form;
            break;
        case 'input':
            SemanticUI = Atoms.Input;
            renderChildren=false;
            break;
        case 'img':
            SemanticUI = Atoms.Img;
            renderChildren=false;
            break;
        case 'a':
            SemanticUI = Atoms.A;
            break;
        case 'svg':
            SemanticUI = Atoms.Svg;
            break;
        case 'i':
            SemanticUI = Atoms.I;
            break;
        default:
            SemanticUI = Atoms.Div;
            break;
    }
    mixStyle.injectStyle();
    // bindStyles need after inject
    var newProps=mixStyle.bindStyles(this.props);
    newProps.className=mixClass(newProps.className,classes);
    newProps=assign({},this.props,newProps);
    return (
        <SemanticUI {...newProps}>{this.renderChildren(renderChildren)}</SemanticUI>
    );
  },
  renderChildren:function(render){
        if(!render){
            return null;
        }
        return React.Children.map(
            this.props.children,
            function (child) {
                if('object' !== typeof child || !child){
                    return child;
                }
                var childProps = child.props;
                var newProps=mixStyle.bindStyles(childProps);
                if('undefined' !== typeof newProps ){
                    return React.cloneElement(
                        child, 
                        assign(
                            {},
                            childProps,
                            {
                                className:newProps.className,
                                styles:newProps.styles,
                                style:newProps.style,
                            }
                        )
                    );
                }
                return child;
            }.bind(this)
        );
    }
    
});
