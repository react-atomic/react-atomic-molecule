import React, {cloneElement} from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const renderChildren = (children, atom)=>{
    return React.Children.map(
        children,
        (child) => {
            if (!child) {
                return null;
            }
            if ( 'ul'=== atom || 'ol'=== atom ) {
                let clone = cloneElement(
                    child, 
                    {
                        atom: 'li'
                    }
                );
                return clone;
            }
            return child;
        }
    );
}

const List = (props) => 
{
    const {type, className, children, ...others} = props;
    let typeClass;
    switch (type) {
        case 'segment':
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
        <SemanticUI {...others} className={classes}>
            {renderChildren(children, props.atom)}
        </SemanticUI>
    );
}
export default List;
