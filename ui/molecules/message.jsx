import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';
import Header from '../molecules/header';

export default class Message extends Component
{
    render()
    {
        let classes = mixClass(
            this.props.className,
            {
                error: (this.props.error === 'error'),
                success: (this.props.error === 'success'),
                warning: (this.props.error === 'warning')
            },
            'message'
        );
        let header = null;
        if (this.props.header) {
            header = <Header>{this.props.header}</Header>;
        }
        return (
          <SemanticUI {...this.props} className={classes}>
          {header}
          {this.props.children}
          </SemanticUI>
        );
    }
}
