var React = require('react');
var SemanticUI = require('../molecules/semantic_ui');
var Classable = require('../mixins/classable');

var UnSafeWrapper=React.createClass({
  render: function() {
    return React.createElement('div', {
        dangerouslySetInnerHTML:{
            __html: this.props.children 
        }}); 
  }
});

module.exports = React.createClass({
  displayName: 'UnSafe',

  mixins: [Classable],

  render: function() {
    return (
        <SemanticUI><UnSafeWrapper>{this.props.children}</UnSafeWrapper></SemanticUI>
    );
  }

});

