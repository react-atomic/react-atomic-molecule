/* jshint esnext: true */
import React from 'react'; 
import {
    mixClass,
    SemanticUI 
} from '../../src/index';
const Form = (props) => {
    const {message, className, ...others} = props; 
    const classes = mixClass(
        className,
        {
            error: (message === 'error'),
            success: (message === 'success'),
            warning: (message === 'warning')
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
