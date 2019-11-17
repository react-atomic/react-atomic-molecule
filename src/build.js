import {isValidElement, cloneElement, createElement, Children} from 'react';
import {FUNCTION} from 'reshow-constant';
import {removeEmpty} from 'array.merge';

const buildFunc = (component, props, child) => {
  // anonymous function will call directly
  if (FUNCTION === typeof component && !component.name) {
    try {
      if (child != null) {
        props.children = child;
      }
      return component(props);
    } catch (e) {
      if (e.name === 'TypeError') {
        return buildReact(component, props, child);
      } else {
        throw e;
      }
    }
  } else {
    return buildReact(component, props, child);
  }
};

const buildReact = (component, props, child) => {
  const params = [component, removeEmpty(props, true)];
  if (child != null) {
    params.push(child);
  }
  return (isValidElement(component) ? cloneElement : createElement).apply(
    null,
    params,
  );
};

const build = component => (props, child) => {
  if (!component) {
    return null;
  }

  const run = comp =>
    (isValidElement(comp) ? buildReact : buildFunc)(comp, props, child);

  return component.map
    ? Children.map(component.map(comp => run(comp)), c => c)
    : run(component);
};

export default build;
