import StyleObject from "./StyleObject";
/**
 * @param {any[]|any} css
 * @param {string|string[]|boolean} [selector]
 * @param {string|boolean} [styleId]
 * @returns {StyleObject|undefined}
 */
declare const createStyle: (css: any[] | any, selector?: string | string[] | boolean, styleId?: string | boolean) => StyleObject | undefined;
export default createStyle;
