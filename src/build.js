import {isValidElement, cloneElement, createElement} from 'react';

const build = component => (props, child) =>
  (isValidElement(component) ? cloneElement : createElement).apply(
    null, child ? [component, props, child] : [component, props]
  );

export default build;
