import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class ItemHeader extends Component
{
    render()
    {
        var classes = mixClass(
            this.props.className
            ,'header'
        );
        return (
          <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
}
