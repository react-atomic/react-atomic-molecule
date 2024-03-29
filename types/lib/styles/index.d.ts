export default createStyle;
/**
 * @param {any[]|any} css
 * @param {string|string[]|boolean} [selector]
 * @param {string|boolean} [styleId]
 * @returns {StyleObject|undefined}
 */
declare function createStyle(css: any[] | any, selector?: string | string[] | boolean, styleId?: string | boolean): StyleObject | undefined;
import StyleObject from "./StyleObject";
