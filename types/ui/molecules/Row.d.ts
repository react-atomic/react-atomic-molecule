export default Row;
declare function Row({ component, ui, className, ...restProps }: {
    [x: string]: any;
    component?: ({ ui, renderChildren, refCb, atom, children, styles, styleOrder, ...restProps }: any) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    ui?: boolean;
    className: any;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
