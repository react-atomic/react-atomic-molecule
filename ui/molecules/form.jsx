/* jshint esnext: true */
import {
    React,
    Component,
    SemanticUI, 
    assign,
    mixClass
} from '../../src/index';

export default class Form extends Component
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
            'form'
        );
        let props = assign({},this.props);
        delete props.error;
        return (
            <SemanticUI atom="form" {...props} className={classes}>
                {props.children}
            </SemanticUI>
        );
    }
}
