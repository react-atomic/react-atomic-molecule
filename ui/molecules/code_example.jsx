import React, {Component} from 'react'; 
import SemanticUI from '../molecules/SemanticUI';
import Segment from '../molecules/segment';
import DivingHeader from '../molecules/dividing_header';
import Ribbon from '../molecules/ribbon';
import CodeBlock from '../molecules/code_block';

export default class CodeExample extends Component
{
    render()
    {
        var title = this.props.title;
        return (
            <Segment>
                <DivingHeader style={{marginBottom:'10px'}}>
                    {title}
                </DivingHeader>
                <Ribbon style={{marginBottom:'10px'}}>Example</Ribbon>
                <SemanticUI style={{marginBottom:'10px'}}>
                        {this.props.children}
                </SemanticUI>
                <Ribbon>Source Code</Ribbon>
                <CodeBlock>{this.props.code}</CodeBlock>
            </Segment>
        );
    }
}
CodeExample.propTypes = { code: React.PropTypes.string.isRequired };

