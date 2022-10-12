export default File;
declare function File({ viewBox, background, shadowColor, labelBackground, labelColor, children, ...props }: {
    [x: string]: any;
    viewBox?: string;
    background?: string;
    shadowColor?: string;
    labelBackground?: string;
    labelColor?: string;
    children: any;
}): JSX.Element;
