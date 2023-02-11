export default injectStyle;
export type CSSProps = {
    styleIds: string[];
    styleObjMap: object;
    styleRuleMap: object;
};
/**
 * @param {object} styles
 */
declare function injectStyle(styles: object): any;
