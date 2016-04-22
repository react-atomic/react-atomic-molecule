var React = require('react');
var Image = require('../molecules/image');
var mixClass = require('classnames');

module.exports  = React.createClass({
  displayName: 'CircularImage',
  render: function() {
    classes = this.getClasses('circular');
    var classes = mixClass(
        this.props.className,
        'circular'
    );
    return (
        <Image {...this.props} className={classes} />
    );
  }

});

