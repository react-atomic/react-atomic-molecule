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
        case 'candleInTheWind':
            import('./candleInTheWind').then( css => processCss(css) );
            break;
        case 'fadeIn':
            import('./fadeIn').then( css => processCss(css) );
            break;
        case 'fadeInUp':
            import('./fadeInUp').then( css => processCss(css) );
            break;
        case 'fadeInRight':
            import('./fadeInRight').then( css => processCss(css) );
            break;
        case 'fadeInDown':
            import('./fadeInDown').then( css => processCss(css) );
            break;
        case 'fadeInLeft':
            import('./fadeInLeft').then( css => processCss(css) );
            break;
        case 'fadeOut':
            import('./fadeOut').then( css => processCss(css) );
            break;
        case 'fadeOutUp':
            import('./fadeOutUp').then( css => processCss(css) );
            break;
        case 'fadeOutRight':
            import('./fadeOutRight').then( css => processCss(css) );
            break;
        case 'fadeOutDown':
            import('./fadeOutDown').then( css => processCss(css) );
            break;
        case 'fadeOutLeft':
            import('./fadeOutLeft').then( css => processCss(css) );
            break;
        case 'pulsate':
            import('./pulsate').then( css => processCss(css) );
            break;
        case 'spin':
            import('./spin').then( css => processCss(css) );
            break;
    }
    inject[key] = true; 
}
export default getKeyframeCss;
