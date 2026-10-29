import StyleObject from "./StyleObject";
/**
 * @param {object} props
 * @param {StyleObject|StyleObject[]} styles
 * @param {number} [order]
 * @returns {props[]}
 */
declare const applyStyles: (props: object, styles: StyleObject | StyleObject[], order?: number) => props[];
export default applyStyles;
