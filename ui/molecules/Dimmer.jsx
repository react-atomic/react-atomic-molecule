/* jshint esnext: true */
import React, {Component} from 'react'; 

import {
    Content,
    SemanticUI,
    assign,
    mixClass
} from '../../src/index';

const isDimmer = (el) =>
{
    if (React.isValidElement(el)){
        let type = el.type;
        if (type.name
            && -1 !== type.name.indexOf('Dimmer')
        ) {
            return true;
        }
    }
    return false;
}

const Dimmer = (props) => {
    const { opacity, zIndex, show, children, fullScreen, ...others } = props;
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
    if (children && !isDimmer(children)) {
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
    fullScreen: false
};

export default Dimmer; 
