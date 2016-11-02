import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Image = (props) =>
{
    const classes = mixClass (
        props.className,
        {
            image: props.ui
        }
    );
    if (props.atom && 'img' !== props.atom) {
        return (
            <SemanticUI
                {...props}
                className={classes}
            >
                <SemanticUI atom="img" src={props.src}/>
                {props.children}
            </SemanticUI>
        );
    } else {
        return (
          <SemanticUI atom="img"
            {...props} 
            className={classes} />
        );
    }
}
Image.defaultProps = { ui: true };
export default Image;
