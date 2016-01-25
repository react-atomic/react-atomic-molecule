import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class FormattedJSON extends Component
{
    render()
    {
        let outputText;
        let outputClass;

      try {
        let indent = this.props.indent;
        let space = (indent === 'TAB') ? '\t' : parseInt(indent);

        outputText = this.formatJSON(this.props.inputText, space);
        outputClass = 'output-good';
      }
      catch (err) {
        // JSON.parse threw an exception
        outputText = err.message;
        outputClass = 'output-error';
      }

      return (
        <SemanticUI
          value={outputText}
          className={outputClass}
          readOnly="true"
          placeholder="Reformatted JSON will appear here"         />
      );
    }

    formatJSON(input, space)
    {
      if (input.length == 0) {
        return '';
      }
      else {
        var parsedData = JSON.parse(input);
        return JSON.stringify(parsedData, null, space);
      }
    }
}
FormattedJSON.propTypes = {
    inputText: React.PropTypes.string.isRequired,
    indent: React.Proptypes.string.isRequired
};
