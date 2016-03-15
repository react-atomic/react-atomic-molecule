import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Image extends Component
{
    render()
    {
        let classes = mixClass (
            this.props.className,
            {
                image:this.props.ui,
                ui:this.props.ui
            }
        );
        return (
          <SemanticUI atom="img"
            {...this.props} 
            className={classes} />
        );
    }
}
Image.defaultProps = { ui: true };

