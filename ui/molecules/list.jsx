var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var mixClass = require('classnames');

module.exports = React.createClass({
    displayName: 'List',
    render: function() {
        var classes = mixClass(
            this.props.className
            ,'list'
        );
        return (
          <SemanticUI {...this.props} className={classes}>{this.renderChildren()}</SemanticUI>
        );
    },
    renderChildren:function(){
        return React.Children.map(
            this.props.children,
            function (child) {
                if( 'ul'===this.props.atom || 
                    'ol'===this.props.atom 
                  )
                 {
                    child.props.atom='li';
                 }
                return child;
            }.bind(this));
    }
});
