import React, {Component} from 'react'; 
import {
    assign,
    mixClass,
    SemanticUI
} from '../../src/index';

export default class List extends Component
{
    render()
    {
        let typeClass;
        const {type, className, ...props} = this.props;
        switch (type) {
            case 'segments':
                typeClass = 'segments'; 
                break;
            case 'button':
                typeClass = 'buttons'; 
                break;
            case 'card':
                typeClass = 'cards'; 
                break;
            case 'item':
                typeClass = 'items'; 
                break;
            case 'list':
            default:
                typeClass = 'list'; 
                break;
            
        }
        let classes = mixClass (
            className,
            typeClass
        );
        return (
          <SemanticUI {...props} className={classes}>{this.renderChildren()}</SemanticUI>
        );
    }

    renderChildren(){
        return React.Children.map(
            this.props.children,
            function (child) {
                if (!child) {
                    return null;
                }
                if( 'ul'===this.props.atom || 
                    'ol'===this.props.atom 
                  ) {
                    let clone = React.cloneElement(
                        child, 
                        assign(
                            {},
                            child.props,
                            {
                                atom: 'li'
                            }
                        )
                    );
                    return clone;
                 }
                return child;
            }.bind(this)
        );
    }
}
