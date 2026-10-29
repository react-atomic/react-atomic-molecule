export type CSSProps = {
    styleIds: string[];
    styleObjMap: object;
    styleRuleMap: object;
};
/**
 * @param {object} [styles]
 */
declare const injectStyle: (styles?: object) => null | undefined;
export default injectStyle;
