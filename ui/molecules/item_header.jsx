var React = require('react');
var AtomDiv = require('react-atomic-atom').div;
var mixClass = require('classnames');

module.exports = React.createClass({
    displayName: 'Header',
    render: function() {
        var classes = mixClass(
            this.props.className
            ,'header'
        );
        return (
          <AtomDiv {...this.props} className={classes}>{this.props.children}</AtomDiv>
        );
    }
});

