/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Field extends Component
{
    render()
    {
        let isGroup = !this.props.atom; 
        let classes = mixClass(
            this.props.fieldClassName,
            {
                field: !isGroup,
                fields: isGroup
            }
        );
        let label = null;
        if (this.props.label) {
            label = 
                <label htmlFor={this.props.id} styles={this.props.labelStyles}>
                    {this.props.label}
                </label>;
        }
        let input = null;
        let fieldStyles = null;
        if (isGroup) {
            fieldStyles = this.props.styles;
        } else {
            fieldStyles = this.props.fieldStyles;
            input = <SemanticUI {...this.props} />;
        }
        return (
            <SemanticUI
                className={classes}
                styles={fieldStyles}
            >
                {label}
                {input}
                {this.props.children}
            </SemanticUI>
        );
    }
}
