import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Header extends Component
{
    render()
    {
        let classes = mixClass(
            this.props.className
            ,'header'
        );
        return (
          <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
}
