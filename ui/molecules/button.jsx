import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Button extends Component
{
    render()
    {
        let classes = mixClass (
            this.props.className,
            'button'
        );
        return (
          <SemanticUI atom="button" {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
}

