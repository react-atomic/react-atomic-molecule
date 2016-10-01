/* jshint esnext: true */
import React, {Component} from 'react'; 

import {
    Content,
    SemanticUI,
    assign,
    mixClass
} from '../../src/index';

const Dimmer = (props) => {
    const { opacity, zIndex, show, children, center, fullScreen, ...others } = props;
    let cssVisible;
    let cssActive;
    let cssHidden;
    let oStyle = assign({}, props.style); 
    if (show) {
        cssVisible = true;
        cssActive = true;
        oStyle.opacity = opacity;
        oStyle.zIndex = zIndex;
    } else {
        cssHidden = true;
    }
    let classes = mixClass(
        props.className,
        'transition',
        {
            dimmer: !fullScreen,
            modal: fullScreen,
            visible: cssVisible,
            active:  cssActive,
            hidden:  cssHidden
        }
    );

    let content;
    if (center) {
        content = <Content style={{boxSizing: 'inherit'}}>
            <div className="center">{children}</div>
        </Content>;
    } else {
        content = children;
    }

    return (
      <SemanticUI
        {...others}
        style={oStyle}
        className={classes}
      >
        {content}
      </SemanticUI>
    );
};

Dimmer.defaultProps = {
    show: false,
    fullScreen: false,
    center: true
};

export default Dimmer; 
