/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Field extends Component
{
    render()
    {
        let isGroup = (1<React.Children.count(this.props.children)); 
        let classes = mixClass(
            this.props.className,
            {
                field: !isGroup,
                fields: isGroup
            }
        );
        let label = null;
        if (this.props.label) {
            label = <label>{this.props.label}</label>;
        }
        let children; 
        if (isGroup) {
            children = this.props.children; 
        } else {
            children = <SemanticUI atom="input" {...this.props} />;
        }
        return (
            <SemanticUI className={classes}>
                {label}
                {children}
            </SemanticUI>
        );
    }
}
