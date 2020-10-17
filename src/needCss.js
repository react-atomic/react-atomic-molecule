import store from "./lib/styles/store";

const needCss = (mod) => (store.mods[mod] = 1);

export default needCss;
