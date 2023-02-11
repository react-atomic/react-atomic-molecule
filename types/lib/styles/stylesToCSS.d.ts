export default stylesToCSS;
export type CSSProps = {
    styleIds: string[];
    styleObjMap: object;
    styleRuleMap: object;
};
/**
 * @param {object[]} styles
 * @returns {CSSProps}
 */
declare function stylesToCSS(styles: object[]): CSSProps;
