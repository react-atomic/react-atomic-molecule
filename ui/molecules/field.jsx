/* jshint esnext: true */
import React, {Component} from 'react'; 
import {
    SemanticUI,
    mixClass
} from '../../src/index';

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
                <SemanticUI atom="label" htmlFor={this.props.id} styles={this.props.labelStyles}>
                    {this.props.label}
                </SemanticUI>;
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
                styleOrder={this.props.styleOrder}
            >
                {label}
                {input}
                {this.props.children}
            </SemanticUI>
        );
    }
}
