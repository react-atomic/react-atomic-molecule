import store from "./store";

const genStyleId = (name = "c") => name + store.counter++ + "_";

export default genStyleId;
