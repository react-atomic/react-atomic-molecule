const React = require('react');
const SemanticUI = require('../molecules/semantic_ui.jsx');
const mixClass = require('classnames');
const ReactStyle = require('../../src/lib/styles/index');

let Styles = {
    general: ReactStyle({
        borderTop: '1px solid #bdbdbd',
        top: '10px'
    },'.ui.horizontal.divider:after, .ui.horizontal.divider:before'), 
    left: ReactStyle({
        left: '-10px'
    },'.ui.horizontal.divider:before'),
    right: ReactStyle({
        right: '-10px'
    },'.ui.horizontal.divider:after'),
    line: {
        color: '#757575',
        marginLeft: '10px',
        marginRight: '10px'
    }
};

export default class DividerHorizontal extends React.Component
{
    render() {
        var classes = mixClass(
            this.props.className,
            'horizontal divider header'
        );
        return (
            <SemanticUI {...this.props} className={classes} style={Styles.line}>{this.props.children}</SemanticUI>
        );
    }
}

