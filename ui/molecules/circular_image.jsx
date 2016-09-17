import React, {Component} from 'react'; 
import {
    Image,
    assign,
    mixClass
} from '../../src/index';

class CircularImage extends Component
{
    render(){
        
        let classes = mixClass(
            this.props.className,
            'circular'
        );
        return (
            <Image {...this.props} className={classes} />
        );
    };
}

export default CircularImage;
