/* jshint esnext: true */
import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class Description extends Component
{
    render()
    {
        let classes = mixClass(
            this.props.className
            ,'description'
        );
        return (
          <SemanticUI {...this.props}
            ui={false}
            className={classes}
          />
        );
    }
}

