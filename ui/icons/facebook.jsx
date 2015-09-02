const React = require('react');
const ReactStyle = require('../../src/lib/styles/index');
const mixClass = require('classnames');
const Touch = require('../molecules/tappable.jsx');
const SemanticUI = require('../molecules/semantic_ui.jsx');
const Path = require('react-atomic-atom').path;

export default class FacebookIcon extends React.Component
{
    render() {
        var classes = mixClass(
            this.props.className
            ,'icon'
        );
        return (
            <Touch {...this.props}  className={classes} atom="i">
            
                <SemanticUI atom="svg" baseProfile="tiny" version="1.2" viewBox="0 0 24 24"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet">
                    <g>
                    <Path d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1   C13.402,7,13,7.402,13,7.899V10z"/>
                    </g>
                </SemanticUI>
            </Touch>
        );
    }
}
