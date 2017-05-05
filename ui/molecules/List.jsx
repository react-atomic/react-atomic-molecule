import React, {Children, cloneElement} from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const renderChildren = (children, atom)=>{
    return Children.map(
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
    let typeClass = 'list';
    if (type) {
        typeClass = type;
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
