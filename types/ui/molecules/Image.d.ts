export default Image;
/**
 * @param {{
 *   component?: React.ReactNode,
 *   loading?: string,
 *   src?: string,
 *   imgProps?: any,
 *   prepend?: React.ReactNode | React.ReactNode[],
 *   className?: string,
 *   alt?: string,
 *   title?: string,
 *   atom?: string,
 *   children?: React.ReactNode | React.ReactNode[],
 *   [key: string]: any
 * }} props
 */
declare function Image(props: {
    component?: React.ReactNode;
    loading?: string;
    src?: string;
    imgProps?: any;
    prepend?: React.ReactNode | React.ReactNode[];
    className?: string;
    alt?: string;
    title?: string;
    atom?: string;
    children?: React.ReactNode | React.ReactNode[];
    [key: string]: any;
}): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
import * as React from "react";
