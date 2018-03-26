import React, {Children, cloneElement} from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const renderChildren = (children, atom)=>
Children.map(
    children,
    child => {
        if (!child) {
            return null;
        }
        if ( 'ul'=== atom || 'ol'=== atom ) {
            child = cloneElement(
                child, 
                {
                    atom: 'li'
                }
            );
            return clone;
        }
        return child;
    }
)

const List = props => 
{
    const {type, className, children, ...others} = props;
    let typeClass = 'list';
    if (type) {
        typeClass = type;
    }
    const classes = mixClass (
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
