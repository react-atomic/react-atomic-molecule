import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Title extends Component
{
    render()
    {
        let classes = mixClass (
            this.props.className,
            'title'
        );
        return (
          <SemanticUI {...this.props} className={classes} />
        );
    }
}
