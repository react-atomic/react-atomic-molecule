export default StyleObject;
declare class StyleObject {
    /**
     * @param {object[]} styleRules
     * @param {string|string[]} selector
     * @param {string} styleId
     */
    constructor(styleRules: object[], selector: string | string[], styleId: string);
    styleRules: any[];
    selector: string | string[];
    styleId: string;
    /**
     * @returns {boolean}
     */
    isCompiled(): boolean;
}
