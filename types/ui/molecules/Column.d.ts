export default Column;
declare function Column({ component, pureUnitOne, ui, className, ...restProps }: {
    [x: string]: any;
    component?: import("react").FC<any>;
    pureUnitOne?: boolean;
    ui?: boolean;
    className: any;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
