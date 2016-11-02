import React from 'react'; 
import {
    mixClass,
    Header,
    SemanticUI
} from '../../src/index';

const Message = (props) =>
{
    const {header, className, children, message, ...reset} = props;
    const classes = mixClass(
        className,
        {
            info: (message === 'info'),
            error: (message === 'error'),
            success: (message === 'success'),
            warning: (message === 'warning')
        },
        'message'
    );
    let thisHeader;
    if (header) {
        thisHeader = <Header>{header}</Header>;
    }
    return (
      <SemanticUI {...reset} className={classes}>
          {thisHeader}
          {children}
      </SemanticUI>
    );
};
export default Message;
