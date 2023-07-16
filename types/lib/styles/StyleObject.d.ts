export default StyleObject;
declare class StyleObject {
    /**
     * @param {object[]} styleRules
     * @param {string|string[]|boolean} [selector]
     * @param {string|boolean} [styleId]
     */
    constructor(styleRules: object[], selector?: string | string[] | boolean, styleId?: string | boolean);
    styleRules: any[];
    /**
     * @type {string|string[]}
     */
    selector: string | string[];
    styleId: string | boolean;
    /**
     * @returns {boolean}
     */
    isCompiled(): boolean;
}
