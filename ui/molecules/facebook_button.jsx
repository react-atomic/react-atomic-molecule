const React = require('react');
const Button = require('../molecules/button.jsx');
const FacebookIcon = require('../icons/facebook.jsx');
const mixClass = require('classnames');

export default class FacebookButton extends React.Component
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
