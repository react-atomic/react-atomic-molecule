/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Field extends Component
{
    render()
    {
        let classes = mixClass(
            this.props.className
            ,'field'
        );
        let label = null;
        if (this.props.label) {
            label = <label>{this.props.label}</label>;
        }
        return (
            <SemanticUI className={classes}>
                {label}
                <SemanticUI {...this.props}>{this.props.children}</SemanticUI>
            </SemanticUI>
        );
    }
}
