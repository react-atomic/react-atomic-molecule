import React from 'react';
import {
    reactStyle
} from 'react-atomic-molecule';
import HamburgerIcon from './Hamburger';

const HamburgerTransform = (Styles) => 
{
    const Transform = (props) =>
    {
        const {on, right, ...others} = props;
        let styleLine1 = Styles.line;
        let styleLine2 = Styles.line;
        let styleLine3 = Styles.line;
        if (right) {
            others.transform = 'rotate(180)';
        }
        if (on) {
            styleLine1 = {
                ...Styles.line,
                ...Styles.line1
            };
            styleLine2 = {
                ...Styles.line,
                ...Styles.line2
            };
            styleLine3 = {
                ...Styles.line,
                ...Styles.line3
            };
        }
        return (
            <HamburgerIcon
                {...others}
                line1={reactStyle(styleLine1, null, false)}
                line2={reactStyle(styleLine2, null, false)}
                line3={reactStyle(styleLine3, null, false)}
            />
        );
    }
    return Transform;
}

export default HamburgerTransform;
