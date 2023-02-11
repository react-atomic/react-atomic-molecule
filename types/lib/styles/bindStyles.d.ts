export default bindStyles;
export type StyleInputProps = {
    className: string;
    style: object;
    styles: object | object[];
    styleOrder: number;
};
export type StyleProps = {
    className?: string;
    style?: object;
};
/**
 * @typedef {object} StyleInputProps
 * @property {string} className
 * @property {object} style
 * @property {object|object[]} styles
 * @property {number} styleOrder
 */
/**
 * @typedef {object} StyleProps
 * @property {string} [className=null]
 * @property {object} [style=null]
 */
/**
 * @param {StyleInputProps} props
 * @returns {StyleProps}
 */
declare function bindStyles({ className, style, styles, styleOrder }: StyleInputProps): StyleProps;
