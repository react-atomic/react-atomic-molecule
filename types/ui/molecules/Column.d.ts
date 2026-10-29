import SemanticUI from "../molecules/SemanticUI";
declare const Column: ({ component, pureUnitOne, ui, className, ...restProps }: {
    [x: string]: any;
    className: any;
    component?: typeof SemanticUI | undefined;
    pureUnitOne?: boolean | undefined;
    ui?: boolean | undefined;
}) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | null;
export default Column;
