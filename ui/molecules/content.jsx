import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Content extends Component
{
    render()
    {
        let classes = mixClass (
            this.props.className,
            'content'
        );
        return (
          <SemanticUI {...this.props}
            ui={false}
            className={classes}
          />
        );
    }
}

