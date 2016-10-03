'use strict';
import reactStyle from './index'; 

const lazyInject = (injects, configs) => {
    if (!injects) {
        injects = {};
        const keys = Object.keys(configs);
        keys.forEach((key)=>{
            let item = configs[key];
            injects[key] = reactStyle.apply(
                null,
                item
            );
        });
    }
    return injects;
};

export default lazyInject;
