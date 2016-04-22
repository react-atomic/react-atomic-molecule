var React = require('react');
var Label = require('../molecules/label');
var Icon = require('../molecules/icon');
var Classable = require('../mixins/classable');
var SemanticUI = require('../molecules/semantic_ui');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    return (
      <SemanticUI {...this.props}>
        {this.getLabels()}
      </SemanticUI>
    );
  },
  getLabels: function(){
    var children=[];
    var icon;
    var item;
    var itemComponent;
    for (var i=0; i < this.props.list.length; i++) {
        item = this.props.list[i];
        if(item.icon){
            icon= <Icon name="{item.icon}" />;
        }else{
            icon='';
        }
        itemComponent = (
            <Label key={i}>{icon}{item.name}</Label>
        );
        children.push(itemComponent);
    }
    return children;
  }

});

