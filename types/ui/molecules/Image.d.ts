import * as React from "react";
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
declare const Image: (props: {
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
}) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
export default Image;
