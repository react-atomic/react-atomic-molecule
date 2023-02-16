export default Row;
declare function Row({ component, ui, className, ...restProps }: {
    [x: string]: any;
    component?: import("react").FC<any>;
    ui?: boolean;
    className: any;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
