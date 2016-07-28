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
                info: (this.props.type === 'info'),
                error: (this.props.type === 'error'),
                success: (this.props.type === 'success'),
                warning: (this.props.type === 'warning')
            },
            'message'
        );
        let {header, ...reset} = this.props;
        if (header) {
            header = <Header>{header}</Header>;
        }
        return (
          <SemanticUI {...reset} className={classes}>
          {header}
          {this.props.children}
          </SemanticUI>
        );
    }
}
