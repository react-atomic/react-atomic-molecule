import SemanticUI from "../molecules/SemanticUI";
declare const Row: ({ component, ui, className, ...restProps }: {
    [x: string]: any;
    className: any;
    component?: typeof SemanticUI | undefined;
    ui?: boolean | undefined;
}) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | null;
export default Row;
