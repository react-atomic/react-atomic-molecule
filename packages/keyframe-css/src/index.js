'use strict';
import {
    reactStyle,
    injectStyle
} from 'react-atomic-molecule';

let inject = {};
let c = 0;

const processCss = (css) =>
{
    const keys = Object.keys(css);
    if (keys.length) {
        keys.forEach((key)=>{
            css[key].push('keyframe-'+c);
            reactStyle.apply(null, css[key]);
            c++;
        });
        injectStyle();
    }
}

const getKeyframeCss = (key)=>
{
    if (inject[key]) {
        return;
    }
    switch(key){
        case 'fadeIn':
            require(['./fadeIn'], (css) => { processCss(css); });
            break;
        case 'fadeInUp':
            require(['./fadeInUp'], (css) => { processCss(css); });
            break;
        case 'fadeInRight':
            require(['./fadeInRight'], (css) => { processCss(css); });
            break;
        case 'fadeInDown':
            require(['./fadeInDown'], (css) => { processCss(css); });
            break;
        case 'fadeInLeft':
            require(['./fadeInLeft'], (css) => { processCss(css); });
            break;
        case 'fadeOut':
            require(['./fadeOut'], (css) => { processCss(css); });
            break;
        case 'fadeOutUp':
            require(['./fadeOutUp'], (css) => { processCss(css); });
            break;
        case 'fadeOutRight':
            require(['./fadeOutRight'], (css) => { processCss(css); });
            break;
        case 'fadeOutDown':
            require(['./fadeOutDown'], (css) => { processCss(css); });
            break;
        case 'fadeOutLeft':
            require(['./fadeOutLeft'], (css) => { processCss(css); });
            break;
        case 'pulsate':
            require(['./pulsate'], (css) => { processCss(css); });
            break;
        case 'spin':
            require(['./spin'], (css) => { processCss(css); });
            break;
    }
    inject[key] = true; 
}
export default getKeyframeCss;
