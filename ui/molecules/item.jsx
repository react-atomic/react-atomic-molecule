/* jshint esnext: true */
var React = require('react');
var AtomDiv = require('react-atomic-atom').div;
var AtomLi = require('react-atomic-atom').li;
var mixClass = require('classnames');

module.exports = React.createClass({
    displayName: 'Item',
    render: function() {
        var Item=AtomDiv;
        var classes = mixClass(
            this.props.className
            ,'item'
        );
        switch (this.props.atom){
            case 'li':
                Item=AtomLi;
                break;
        }
        return (
            <Item {...this.props} className={classes}>{this.props.children}</Item>
        );
    }
});
