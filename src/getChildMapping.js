import { Children } from "react";

const bindChildKey = (children) => Children.map(children, (c) => c);

const getChildMapping = (children, mapFn) => {
  const mapper = (child, key) => (mapFn ? mapFn(child, key) : child);
  const result = {};
  if (children) {
    /**
     * Hack for https://fb.me/react-warning-keys
     * Each child in an array or iterator should have a unique "key"
     * map for auto assign child.key
     */
    bindChildKey(children).forEach((child) => {
      if (!child) {
        return;
      }
      result[child.key] = mapper(child, child.key);
    });
  }
  return result;
};

export default getChildMapping;

export { bindChildKey };
