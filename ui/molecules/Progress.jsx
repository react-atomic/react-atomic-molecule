import React from 'react'; 
import {
    mixClass,
    reactStyle,
    SemanticUI
} from '../../src/index';

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
    } = barProps;
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
