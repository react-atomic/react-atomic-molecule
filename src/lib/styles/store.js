
let stylesStore = {
    styles:[],
    registry:[],
    newStyles:[],
    counter:0
};

if ('undefined' != typeof window) {
    if (window.reactStylesStore) {
        stylesStore = window.reactStylesStore;
    } else {
        window.reactStylesStore = stylesStore;
    }
}

module.exports = stylesStore;
