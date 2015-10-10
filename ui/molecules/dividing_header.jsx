let React = require('react');
let SemanticUI = require('../molecules/semantic_ui');
let mixClass = require('classnames');

export default class DividingHeader extends React.Component
{
    render()
    { 
        let classes = mixClass(
                this.props.className,
                'dividing header'
        );
        return (
            <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );  
    }
}
