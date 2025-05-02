export default Row;
declare function Row({ component, ui, className, ...restProps }: {
    [x: string]: any;
    component?: ({ ui, renderChildren, atoms, useCSS, cssList, refCb, atom, children, styles, styleOrder, ...restProps }: SemanticUIProps & React.HTMLProps) => React.ReactElement | null;
    ui?: boolean;
    className: any;
}): any;
