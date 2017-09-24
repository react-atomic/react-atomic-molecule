import React from 'react'; 
import {mixClass} from 'class-lib';
import Title from '../molecules/Title';
import SemanticUI from '../molecules/SemanticUI';

const SearchBox = (props) =>
{
    const classes = mixClass (
        props.className,
        'search'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      >
        <SemanticUI atom="input" className="prompt" type="text" />
        <SemanticUI className="results">
            <SemanticUI className="result"><Title>1</Title></SemanticUI>
            <SemanticUI className="result"><Title>2</Title></SemanticUI>
            <SemanticUI className="result"><Title>3</Title></SemanticUI>
        </SemanticUI>
      </SemanticUI>
    );
}

export default SearchBox;
