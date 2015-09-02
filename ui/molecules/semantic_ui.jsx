/* jshint esnext: true */
var React = require('react');
var Atoms = require('react-atomic-atom');
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
            SemanticUI = Atoms.h1;
            break;
        case 'h2':
            SemanticUI = Atoms.h2;
            break;
        case 'h3':
            SemanticUI = Atoms.h3;
            break;
        case 'h4':
            SemanticUI = Atoms.h4;
            break;
        case 'h5':
            SemanticUI = Atoms.h5;
            break;
        case 'h6':
            SemanticUI = Atoms.h6;
            break;
        case 'ol':
            SemanticUI = Atoms.ol;
            break;
        case 'ul':
            SemanticUI = Atoms.ul;
            break;
        case 'nav':
            SemanticUI = Atoms.nav;
            break;
        case 'button':
            SemanticUI = Atoms.button;
            break;
        case 'form':
            SemanticUI = Atoms.form;
            break;
        case 'input':
            SemanticUI = Atoms.input;
            renderChildren=false;
            break;
        case 'img':
            SemanticUI = Atoms.img;
            break;
        case 'a':
            SemanticUI = Atoms.a;
            break;
        case 'svg':
            SemanticUI = Atoms.svg;
            break;
        case 'i':
            SemanticUI = Atoms.i;
            break;
        default:
            SemanticUI = Atoms.div;
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
