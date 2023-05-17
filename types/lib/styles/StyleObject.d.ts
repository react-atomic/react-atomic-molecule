export default StyleObject;
declare class StyleObject {
    /**
     * @param {object[]} styleRules
     * @param {string|string[]} [selector]
     * @param {string|boolean} [styleId]
     */
    constructor(styleRules: object[], selector?: string | string[], styleId?: string | boolean);
    styleRules: any[];
    selector: string | string[];
    styleId: string | boolean;
    /**
     * @returns {boolean}
     */
    isCompiled(): boolean;
}
