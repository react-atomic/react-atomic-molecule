/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Rail extends Component
{
    render()
    {
        var classes = mixClass(
            this.props.className,
            {
                left: true
            },
            'rail'
        );
        return (
            <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
}
