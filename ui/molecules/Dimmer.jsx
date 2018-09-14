/* jshint esnext: true */
import React from 'react'; 
import {mixClass} from 'class-lib';
import Content from '../molecules/Content';
import SemanticUI from '../molecules/SemanticUI';

const Dimmer = (props) => {
    const {className, show, children, center, content, isModal, ...others } = props;
    if (!show) {
        return null;
    }
    let classes = mixClass(
        className,
        'transition visible active',
        {
            dimmer: !isModal,
            modal: isModal
        }
    );

    let child;
    if (center && content) {
        child = (
            <Content style={{boxSizing: 'inherit'}}>
                {children}
            </Content>
        );
    } else {
        child = children;
    }
    return (
      <SemanticUI
        {...others}
        className={classes}
      >
        {child}
      </SemanticUI>
    );
};

Dimmer.defaultProps = {
    show: false,
    isModal: false,
    center: true,
    content: true // same with center attriube, just let user not confuse 
};

export default Dimmer; 
