let React = require('react');
let SemanticUI = require('../molecules/semantic_ui.jsx');
let mixClass = require('classnames');


export default class Segment extends React.Component
{

  render()
  {
      var classes = mixClass(this.props.className,'segment');
      return (
              <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
             );
  }

}

