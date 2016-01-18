import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Menu extends Component
{
    render()
    {
        var classes = mixClass(
            this.props.className
            ,'menu'
        );
        return (
            <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
}

