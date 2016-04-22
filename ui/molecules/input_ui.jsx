var React = require('react');
var SemanticUI = require('../molecules/semantic_ui');
var mixClass = require('classnames');

module.exports = React.createClass({
  displayName: 'InputUI',
  render: function() {
    var classes = mixClass(
        this.props.className
        ,'input'
        ,'action'
    );
    return (
      <SemanticUI {...this.props} className={classes}>
        {this.props.children}
      </SemanticUI>
    );
  }
});

