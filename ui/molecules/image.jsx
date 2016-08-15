import {
    React,
    Component,
    SemanticUI,
    mixClass
} from '../../src/index';

export default class Image extends Component
{
    render()
    {
        let props = this.props;
        let classes = mixClass (
            props.className,
            {
                image: props.ui
            }
        );
        if (props.atom && 'img' !== props.atom) {
            return (
                <SemanticUI
                    {...props}
                    className={classes}
                >
                    <SemanticUI atom="img" src={props.src}/>
                    {props.children}
                </SemanticUI>
            );
        } else {
            return (
              <SemanticUI atom="img"
                {...props} 
                className={classes} />
            );
        }
    }
}
Image.defaultProps = { ui: true };

