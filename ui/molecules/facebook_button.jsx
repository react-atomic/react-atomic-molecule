import React, {Component} from 'react'; 
import mixClass from 'classnames';
import Button from '../molecules/button';
import FacebookIcon from '../icons/facebook';

export default class FacebookButton extends Component
{
    render() {
        var classes = mixClass(
            this.props.className
            ,'icon'
            ,'facebook'
        );
        return (
            <Button {...this.props} className={classes}>
                <FacebookIcon style={{float:"left", width:"25px", height:"25px", fill:"#fff"}} />
                
                <div style={{marginLeft:"25px"}}>FACEBOOK</div>
                <div style={{marginLeft:"25px"}}>CONNECT</div>
            </Button>
        );
    }
}
