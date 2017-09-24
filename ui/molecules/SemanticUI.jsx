/* jshint esnext: true */
import React from 'react'; 
import * as Atoms from 'react-atomic-atom';
import get from 'get-object-value';
import ucfirst from 'ucfirst';

import injectStyle, {bindStyles} from '../../src/lib/styles/injectStyle';
import {mixClass} from 'class-lib';

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
    let {atom, renderChildren, styles, styleOrder, ui, ...others} = props;
    let SemanticUI;
    if (!atom) {
        atom = '';
    }
    switch (atom){
        case 'input':
            SemanticUI = Atoms.Input;
            renderChildren=false;
            break;
        case 'img':
            SemanticUI = Atoms.Img;
            renderChildren=false;
            break;
        case 'path':
            SemanticUI = Atoms.Path;
            ui = false;
            break;
        default:
            SemanticUI = get(Atoms, [ucfirst(atom)], ()=>Atoms.Div); 
            break;
    }
    // bindStyles need after inject
    let bindProps = {};
    if (styles) {
        bindProps = bindStyles(props);
    }
    others = {...others, ...bindProps}; 
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
