export default Column;
declare function Column({ component, pureUnitOne, ui, className, ...restProps }: {
    [x: string]: any;
    component?: ({ ui, renderChildren, atoms, useCSS, cssList, refCb, atom, children, styles, styleOrder, ...restProps }: SemanticUIProps & React.HTMLProps) => React.ReactElement | null;
    pureUnitOne?: boolean;
    ui?: boolean;
    className: any;
}): any;
