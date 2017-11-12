/* jshint esnext: true */
import React from 'react'; 
import {mixClass} from 'class-lib';
import Content from '../molecules/Content';
import SemanticUI from '../molecules/SemanticUI';

const Dimmer = (props) => {
    const {className, show, children, center, isModal, ...others } = props;
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
        className={classes}
      >
        {content}
      </SemanticUI>
    );
};

Dimmer.defaultProps = {
    show: false,
    isModal: false,
    center: true
};

export default Dimmer; 
