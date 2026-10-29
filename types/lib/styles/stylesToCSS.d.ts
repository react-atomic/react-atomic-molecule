export type CSSProps = {
    styleIds: string[];
    styleObjMap: object;
    styleRuleMap: object;
};
/**
 * @param {object[]} styles
 * @returns {CSSProps}
 */
declare const stylesToCSS: (styles: object[]) => CSSProps;
export default stylesToCSS;
