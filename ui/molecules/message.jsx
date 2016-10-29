import React from 'react'; 
import {
    mixClass,
    Header,
    SemanticUI
} from '../../src/index';

const Message = (props) =>
{
    let {header, className, children, type, ...reset} = props;
    let classes = mixClass(
        className,
        {
            info: (type === 'info'),
            error: (type === 'error'),
            success: (type === 'success'),
            warning: (type === 'warning')
        },
        'message'
    );
    if (header) {
        header = <Header>{header}</Header>;
    }
    return (
      <SemanticUI {...reset} className={classes}>
          {header}
          {children}
      </SemanticUI>
    );
};
export default Message;
