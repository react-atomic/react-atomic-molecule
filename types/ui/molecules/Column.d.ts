export default Column;
declare function Column({ component, pureUnitOne, ui, className, ...restProps }: {
    [x: string]: any;
    component?: ({ ui, renderChildren, atoms, useCSS, cssList, refCb, atom, children, styles, styleOrder, ...restProps }: import("../molecules/SemanticUI").SemanticUIProps & import("react").HTMLProps<any>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    pureUnitOne?: boolean;
    ui?: boolean;
    className: any;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
