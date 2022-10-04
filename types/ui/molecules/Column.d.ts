export default Column;
declare function Column({ component, pureUnitOne, ui, className, ...restProps }: {
    [x: string]: any;
    component?: ({ ui, renderChildren, refCb, atom, children, styles, styleOrder, ...restProps }: {
        [x: string]: any;
        ui?: boolean;
        renderChildren?: boolean;
        refCb: any;
        atom: any;
        children: any;
        styles: any;
        styleOrder: any;
    }) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    pureUnitOne?: boolean;
    ui?: boolean;
    className: any;
}): any[] | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
