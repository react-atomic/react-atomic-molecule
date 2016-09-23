/* jshint esnext: true */
import React, {Component} from 'react'; 

import {
    SemanticUI,
    assign,
    mixClass
} from '../../src/index';

const Dimmer = (props) => {
    const { opacity, zIndex, show, ...others } = props;
    let cssVisible;
    let cssActive;
    let cssHidden;
    let oStyle = {}; 
    if (show) {
        cssVisible = true;
        cssActive = true;
        oStyle = {
            opacity:opacity,
            zIndex:zIndex
        };
    } else {
        cssHidden = true;
    }
    let classes = mixClass(
        this.props.className,
        'dimmer',
        'transition',
        {
            visible: cssVisible,
            active:  cssActive,
            hidden:  cssHidden
        }
    );
    return (
      <SemanticUI
        {...other}
        styles={oStyle}
        className={classes}
      />
    );
};

export default Dimmer; 
