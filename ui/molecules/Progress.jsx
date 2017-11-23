import React from 'react'; 
import reactStyle from '../../src/lib/styles/index'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const Progress = (props) =>
{
    const {
        barProps,
        className,
        percent,
        style,
        styles,
        ...others
    } = props;
    const {
        style: barStyle,
        styles: barStyles,
        ...otherBarProps
    } = barProps || {};
    const classes = mixClass (
        className,
        'progress'
    );

    return (
        <SemanticUI
            {...others}
            className={classes}
            styles={[
                reactStyle({
                    fontSize: 0,
                    ...style
                }, null, false),
                styles
            ]}
        >
            <SemanticUI
                className="bar"
                {...otherBarProps}
                styles={[ 
                    reactStyle({
                        width: percent+'%',
                        ...barStyle
                    }, null, false),
                    barStyles
                ]}
            />
        </SemanticUI>
    );
}

export default Progress;
