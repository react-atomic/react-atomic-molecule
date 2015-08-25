var React = require('react');
var Menu = require('../molecules/menu');
var mixClass = require('classnames');

module.exports = React.createClass({
  displayName: 'Sidebar',
  render: function() {
    var classes = mixClass(
        this.props.className
        ,'sidebar'
    );
    return (
      <Menu {...this.props} className={classes}>{this.props.children}</Menu>
    );
  }
});

