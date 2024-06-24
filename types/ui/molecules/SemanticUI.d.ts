export default SemanticUI;
export type SemanticUIProps = {
    ui?: boolean | undefined;
    renderChildren?: boolean | undefined;
    atoms?: any | undefined;
    atom?: string | undefined;
    useCSS?: Function | undefined;
    cssList?: CSSType[] | undefined;
    refCb?: Function | undefined;
    children?: React.ReactNode | undefined;
    styles?: any | undefined;
    styleOrder?: number | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    ref?: (import("react").RefObject<any> | Function) | undefined;
};
/**
 * @typedef {object} SemanticUIProps
 * @property {boolean=} ui
 * @property {boolean=} renderChildren
 * @property {Object<any, React.ReactNode>=} atoms
 * @property {string=} atom
 * @property {function=} useCSS
 * @property {CSSType[]=} cssList
 * @property {function=} refCb
 * @property {React.ReactNode=} children
 * @property {Object=} styles
 * @property {number=} styleOrder
 * @property {string=} className
 * @property {React.CSSProperties=} style
 * @property {React.RefObject|function=} ref
 */
/**
 * @param {SemanticUIProps&React.HTMLProps} props
 * @returns {React.ReactElement | null}
 */
declare function SemanticUI({ ui, renderChildren, atoms, useCSS, cssList, refCb, atom, children, styles, styleOrder, ...restProps }: SemanticUIProps & import("react").HTMLProps<any>): React.ReactElement | null;
declare class CSSType {
    /**
     * @type string[]
     */
    cssModule: string[];
    /**
     * @type string
     */
    cssGroup: string;
}
