import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Image extends Component
{
    render()
    {
        let props = this.props;
        let classes = mixClass (
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
}
Image.defaultProps = { ui: true };

