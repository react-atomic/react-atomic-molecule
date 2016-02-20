import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Buttons extends Component
{
    render()
    {
        let classes = mixClass (
            this.props.className,
            'buttons'
        );
        return (
          <SemanticUI {...this.props} className={classes} />
        );
    }
}

