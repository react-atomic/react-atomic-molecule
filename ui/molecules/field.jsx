/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Field extends Component
{
    render()
    {
        var classes = mixClass(
            this.props.className
            ,'field'
        );
        return (
            <SemanticUI className={classes}>
                <label>{this.props.label}</label>
                <SemanticUI {...this.props}>{this.props.children}</SemanticUI>
            </SemanticUI>
        );
    }
}
