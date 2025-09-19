export default base;
declare function base(displayName: any, d: any): {
    ({ type, children, ...props }: {
        [x: string]: any;
        type?: any;
        children: any;
    }): any;
    displayName: any;
};
