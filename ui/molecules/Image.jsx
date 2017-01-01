import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Image = (props) =>
{
    const {alt, title, ui} = props;
    const classes = mixClass (
        props.className,
        {
            image: ui
        }
    );
    
    let thisAlt = alt;
    if (!thisAlt) {
        thisAlt = title;
    }

    if (props.atom && 'img' !== props.atom) {
        return (
            <SemanticUI
                {...props}
                className={classes}
            >
                <SemanticUI atom="img" src={props.src} alt={thisAlt}/>
                {props.children}
            </SemanticUI>
        );
    } else {
        return (
          <SemanticUI atom="img"
            {...props} 
            alt={thisAlt}
            className={classes} />
        );
    }
}
Image.defaultProps = { ui: true };
export default Image;
