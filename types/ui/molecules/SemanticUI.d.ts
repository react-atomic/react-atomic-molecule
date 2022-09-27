export default SemanticUI;
declare function SemanticUI({ ui, renderChildren, refCb, atom, children, styles, styleOrder, ...restProps }: {
    [x: string]: any;
    ui?: boolean;
    renderChildren?: boolean;
    refCb: any;
    atom: any;
    children: any;
    styles: any;
    styleOrder: any;
}): import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
