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
        let childrenClasses = null;

        if (1<React.Children.count(this.props.children)) {
            childrenClasses = 'fields';
        }
        return (
            <SemanticUI className={classes}>
                {label}
                <SemanticUI {...this.props} className={childrenClasses}>{this.props.children}</SemanticUI>
            </SemanticUI>
        );
    }
}
