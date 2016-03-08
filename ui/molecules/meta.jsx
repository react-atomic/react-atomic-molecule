import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Meta extends Component
{
    render()
    {
        let classes = mixClass (
            this.props.className,
            'meta'
        );
        return (
          <SemanticUI {...this.props}
            ui={false}
            className={classes}
          />
        );
    }
}

