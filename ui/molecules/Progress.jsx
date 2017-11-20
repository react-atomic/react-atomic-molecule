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
        ...others
    } = props;
    const {
        style: barStyle,
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
            styles={ 
                reactStyle({
                    fontSize: 0,
                    ...style
                }, null, false)
            }
        >
            <SemanticUI
                className="bar"
                {...otherBarProps}
                styles={ 
                    reactStyle({
                        width: percent+'%',
                        ...barStyle
                    }, null, false)
                }
            />
        </SemanticUI>
    );
}

export default Progress;
