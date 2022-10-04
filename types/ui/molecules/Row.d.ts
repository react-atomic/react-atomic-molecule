export default Row;
declare function Row({ component, ui, className, ...restProps }: {
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
    ui?: boolean;
    className: any;
}): any[] | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
