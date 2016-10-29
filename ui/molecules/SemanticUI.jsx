/* jshint esnext: true */
import React from 'react'; 
import * as Atoms from 'react-atomic-atom';

import injectStyle, {bindStyles} from '../../src/lib/styles/injectStyle';
import {
    assign,
    mixClass
} from '../../src/index';

const getChildren = (render, props) =>
{
    if(!render){
        return null;
    }
    /**
     * Hack for https://fb.me/react-warning-keys
     * Each child in an array or iterator should have a unique "key"
     */
    return React.Children.map(
        props.children,
        (child) => {
            return child;
        }
    );
};

const SemanticUI = (props) =>
{
    injectStyle();
    let {atom, className, renderChildren, styles, styleOrder, ui, ...others} = props;
    let SemanticUI;
    switch (atom){
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
        case 'section':
            SemanticUI = Atoms.Section;
            break;
        case 'dl':
            SemanticUI = Atoms.Dl;
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
        case 'path':
            SemanticUI = Atoms.Path;
            ui = false;
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
        default:
            SemanticUI = Atoms.Div;
            break;
    }
    // bindStyles need after inject
    const bindProps = bindStyles(props);
    others = assign(others, bindProps); 
    if (others.className && ui) {
        others.className = mixClass(
            others.className,
            'ui' 
        );
    }
    return React.createElement (
        SemanticUI,
        others,
        getChildren(renderChildren, props)
    );
};

SemanticUI.defaultProps = {
    ui: true,
    renderChildren: true
};

export default SemanticUI;
