import {isValidElement, cloneElement, createElement} from 'react';
import {removeEmpty} from 'array.merge';

const build = component => (props, child) =>
  !component
    ? null
    : (isValidElement(component) ? cloneElement : createElement).apply(
        null,
        child
          ? [component, removeEmpty(props, true), child]
          : [component, removeEmpty(props, true)],
      );

export default build;
