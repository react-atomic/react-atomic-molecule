/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Form extends Component
{
    render()
    {
        var classes = mixClass(
            this.props.className
            ,'form'
        );
        return (
            <SemanticUI atom="form" {...this.props} className={classes}>
                {this.props.children}
            </SemanticUI>
        );
    }
}
