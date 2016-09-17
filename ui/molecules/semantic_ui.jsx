/* jshint esnext: true */
import * as Atoms from 'react-atomic-atom';
import injectStyle, {bindStyles} from '../../src/lib/styles/injectStyle';
import React, {Component} from 'react'; 
import {
    assign,
    mixClass
} from '../../src/index';

export default class SemanticUI extends Component
{
  render() 
  {
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
        case 'li':
            SemanticUI = Atoms.Li;
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
        case 'label':
            SemanticUI = Atoms.Label;
            break;
        case 'textarea':
            SemanticUI = Atoms.Textarea;
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
        case 'table':
            SemanticUI = Atoms.Table;
            break;
        case 'th':
            SemanticUI = Atoms.Th;
            break;
        case 'td':
            SemanticUI = Atoms.Td;
            break;
        case 'section':
            SemanticUI = Atoms.Section;
            break;
        default:
            SemanticUI = Atoms.Div;
            break;
    }
    injectStyle();
    // bindStyles need after inject
    let props = assign(
        {},
        this.props,
        { 
            className: mixClass(
                this.props.className,
                classes
            )
        }
    );
    let newProps = bindStyles(props);
    newProps = assign(props, newProps);
    this.cleanProps(newProps);
    return React.createElement (
        SemanticUI,
        newProps,
        this.renderChildren(renderChildren)
    );
  }

  cleanProps(props)
  {
    delete props.atom;
    delete props.renderChildren;
    delete props.styles;
    delete props.styleOrder;
    delete props.ui;
  }

  renderChildren(render)
  {
        if(!render){
            return null;
        }
        return React.Children.map(
            this.props.children,
            function (child) {
                if('object' !== typeof child || !child){
                    return child;
                }
                let childProps = child.props;
                let newProps = bindStyles(childProps);
                childProps = assign( {}, childProps, newProps);
                this.cleanProps(childProps);
                if('undefined' !== typeof newProps ){
                    child = React.cloneElement(
                        child, 
                        childProps
                    );
                }
                return child;
            }.bind(this)
        );
    }
}
SemanticUI.defaultProps = {
    ui:true,
    renderChildren:true
};
