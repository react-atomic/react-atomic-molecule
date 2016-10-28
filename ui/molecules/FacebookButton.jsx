import React, {Component} from 'react'; 
import FacebookIcon from 'ricon/Facebook';
import {
    mixClass,
    Button 
} from '../../src/index';

const FacebookButton = (props) =>
{
    const classes = mixClass(
        props.className
        ,'icon'
        ,'facebook'
    );
    return (
        <Button {...props} className={classes}>
            <FacebookIcon style={{float:"left", width:"25px", height:"25px", fill:"#fff"}} />
            
            <div style={{marginLeft:"25px"}}>FACEBOOK</div>
            <div style={{marginLeft:"25px"}}>CONNECT</div>
        </Button>
    );
}

export default FacebookButton;
