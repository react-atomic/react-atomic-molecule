import {isValidElement, cloneElement, createElement} from 'react';
import {removeEmpty} from 'array.merge';

const buildFunc = (component, props, child) => {
  try {
    return component(props, child);
  } catch (e) {
    if (e.name === 'TypeError') {
      return createElement(component, props, child);
    } else {
      throw e;
    }
  }
};

const build = component => (props, child) => {
  if (!component) {
    return null;
  }
  const params = [component, removeEmpty(props, true)];
  if (child) {
    params.push(child);
  }
  return (isValidElement(component) ? cloneElement : buildFunc).apply(
    null,
    params,
  );
};

export default build;
