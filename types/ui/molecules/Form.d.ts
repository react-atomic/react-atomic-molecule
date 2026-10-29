import * as React from "react";
/**
 * @param {{
 *   className?: string,
 *   messageType?: "success"|"error"|"warning",
 *   style?: React.CSSProperties,
 *   [key: string]: any
 * }} props
 */
declare const Form: (props: {
    className?: string;
    messageType?: "success" | "error" | "warning";
    style?: React.CSSProperties;
    [key: string]: any;
}) => React.JSX.Element;
export default Form;
