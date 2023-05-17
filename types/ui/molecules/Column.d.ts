export default Column;
declare function Column({ component, pureUnitOne, ui, className, ...restProps }: {
    [x: string]: any;
    component?: ({ ui, renderChildren, refCb, atom, children, styles, styleOrder, ...restProps }: any) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    pureUnitOne?: boolean;
    ui?: boolean;
    className: any;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
