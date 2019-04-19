import {isValidElement, cloneElement, createElement} from 'react'; 

const build = component => (props, child) =>
  (isValidElement(component) ? cloneElement : createElement)(component, props, child);

export default build;
