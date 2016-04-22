import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';
import assign from 'object-assign';

export default class List extends Component
{
    render()
    {
        let classes = mixClass (
            this.props.className,
            'list'
        );
        return (
          <SemanticUI {...this.props} className={classes}>{this.renderChildren()}</SemanticUI>
        );
    }

    renderChildren(){
        return React.Children.map(
            this.props.children,
            function (child) {
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
