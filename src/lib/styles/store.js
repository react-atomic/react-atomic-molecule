
let stylesStore = {
    registry:[],
    newStyles:[],
    counter:0
};
let g = null;

if ('undefined' != typeof window) {
    g = window;
} else {
    g = global;
}
if (g.reactStylesStore) {
    stylesStore = g.reactStylesStore;
} else {
    g.reactStylesStore = stylesStore;
}

export default stylesStore;
