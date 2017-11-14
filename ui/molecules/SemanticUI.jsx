/* jshint esnext: true */
import React from 'react'; 
import * as Atoms from 'react-atomic-atom';
import get from 'get-object-value';
import ucfirst from 'ucfirst';

import injectStyle, {bindStyles} from '../../src/lib/styles/injectStyle';
import {mixClass} from 'class-lib';

const keys = Object.keys;

const getChildren = (render, children) =>
{
    if(!render){
        return null;
    }
    /**
     * Hack for https://fb.me/react-warning-keys
     * Each child in an array or iterator should have a unique "key"
     */
    return React.Children.map(
        children,
        c => c
    );
};

const SemanticUI = ({atom, children, renderChildren, styles, styleOrder, ui, ...others}) =>
{
    injectStyle();
    const {className, style} = others;
    let component;
    switch (atom){
        case 'input':
            component = Atoms.Input;
            renderChildren=false;
            break;
        case 'img':
            component = Atoms.Img;
            renderChildren=false;
            break;
        case 'path':
            component = Atoms.Path;
            ui = false;
            break;
        default:
            if (!atom) { atom = ''; }
            component = get(
                Atoms,
                [ucfirst(atom)],
                ()=>Atoms.Div
            ); 
            break;
    }
    // bindStyles need after inject
    let bindProps = {};
    if (styles) {
        // Need avoid props pass by ref !!important!!
        bindProps = bindStyles({
            className,
            style,
            styles,
            styleOrder,
        });
    }
    keys(bindProps).forEach(
        key => others[key] = bindProps[key]
    );
    if (others.className && ui) {
        others.className = mixClass(
            others.className,
            'ui' 
        );
    }
    return React.createElement (
        component,
        others,
        getChildren(renderChildren, children)
    );
};

SemanticUI.defaultProps = {
    ui: true,
    renderChildren: true
};

export default SemanticUI;
