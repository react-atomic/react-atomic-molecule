import {isUnitlessNumber} from './cssUnitLessNumber';

const cssUnitToNumber = (key, value) => {
    if (isUnitlessNumber[key]) {
        return value;
    }
    if (value && value.map) {
        value.map((v)=>{
            if ('number' === typeof v) {
                v += 'px';
            }
            return v;
        });
    } else {
        if ('number' === typeof value) {
            value += 'px';
        }
    }
    return value;
}

export default cssUnitToNumber;
