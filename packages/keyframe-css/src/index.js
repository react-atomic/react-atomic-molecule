'use strict';
import {
    reactStyle,
    injectStyle
} from 'react-atomic-molecule';

let inject = {};

const processCss = (css, key) =>
{
    const keys = Object.keys(css);
    if (keys.length) {
        keys.forEach((key)=>{
            reactStyle.apply( null, css[key] );
        });
        inject[key] = true; 
        injectStyle();
    }
}

const getKeyframeCss = (key)=>
{
    if (inject[key]) {
        return;
    }
    switch(key){
        case 'pulsate':
            require(['./pulsate'],(css) => {
                processCss(css, key);
            });
            break;
    }
}
export default getKeyframeCss;
