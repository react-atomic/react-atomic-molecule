var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var mixClass = require('classnames');

module.exports = React.createClass({
    displayName: 'Menu',
    render: function() {
        var classes = mixClass(
            this.props.className
            ,'menu'
        );
        return (
                <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
});

