/* jshint esnext: true */
import React from 'react'; 
import {
    mixClass,
    SemanticUI 
} from '../../src/index';
const Form = (props) => {
    const {messageType, className, ...others} = props; 
    const classes = mixClass(
        className,
        {
            error: (messageType === 'error'),
            success: (messageType === 'success'),
            warning: (messageType === 'warning')
        },
        'form'
    );
    return (
        <SemanticUI 
            atom="form"
            {...others}
            className={classes}
        />
    );
};
export default Form;
