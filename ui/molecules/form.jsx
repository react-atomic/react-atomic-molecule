/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Form extends Component
{
    render()
    {
        var classes = mixClass(
            this.props.className,
            {
                error: (this.props.error === 'error'),
                success: (this.props.error === 'success'),
                warning: (this.props.error === 'warning')
            },
            'form'
        );
        return (
            <SemanticUI atom="form" {...this.props} className={classes}>
                {this.props.children}
            </SemanticUI>
        );
    }
}
