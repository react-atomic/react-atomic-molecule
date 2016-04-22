import React, {Component} from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

export default class CodeBlock extends Component
{
    render()
    {
        return (
            <SemanticUI atom="pre" className="code-block">
                <SemanticUI atom="code">
                    {this.props.children}
                </SemanticUI>
            </SemanticUI>
        );
    }
}
