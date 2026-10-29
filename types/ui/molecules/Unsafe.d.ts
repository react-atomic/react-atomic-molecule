declare const Unsafe: ({ className, children, ...restProps }: {
    [x: string]: any;
    children: any;
    className?: string | undefined;
}) => import("react").JSX.Element;
export default Unsafe;
