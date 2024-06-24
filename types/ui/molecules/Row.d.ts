export default Row;
declare function Row({ component, ui, className, ...restProps }: {
    [x: string]: any;
    component?: ({ ui, renderChildren, atoms, useCSS, cssList, refCb, atom, children, styles, styleOrder, ...restProps }: SemanticUIProps & import("react").HTMLProps<any>) => React.ReactElement | null;
    ui?: boolean;
    className: any;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
