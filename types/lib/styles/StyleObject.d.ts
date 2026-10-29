declare class StyleObject {
    styleRules: object[];
    /**
     * @type {string|string[]}
     */
    selector: string | string[];
    styleId: string | boolean | undefined;
    /**
     * @param {object[]} styleRules
     * @param {string|string[]|boolean} [selector]
     * @param {string|boolean} [styleId]
     */
    constructor(styleRules: object[], selector?: string | string[] | boolean, styleId?: string | boolean);
    /**
     * @returns {boolean}
     */
    isCompiled(): boolean;
}
export default StyleObject;
