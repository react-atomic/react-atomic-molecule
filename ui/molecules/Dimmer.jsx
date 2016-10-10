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
    if (!show) {
        return null;
    }
    let oStyle = assign(
        {}, 
        props.style,
        {
            opacity: opacity,
            zIndex: zIndex
        }
    ); 
    let classes = mixClass(
        props.className,
        'transition visible active',
        {
            dimmer: !fullScreen,
            modal: fullScreen
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
