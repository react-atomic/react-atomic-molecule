/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Item extends Component
{
    render()
    {
        var classes = mixClass(
            this.props.className
            ,'item'
        );
        return (
            <SemanticUI {...this.props}
                className={classes}
            />
        );
    }
}
