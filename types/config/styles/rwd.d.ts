/**
 * https://purecss.io/grids/#pure-responsive-grids
 * https://www.w3schools.com/tags/ref_pxtoemconversion.asp
 *
 * if default pixel size eq 16px
 *
 * 35.5.em -> 568px
 * 48em -> 768px
 * 64em -> 1024px
 * 80em -> 1280px
 * 120em -> 1920px
 */
declare const pageWidth: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
export type PageWidth = any;
declare const min: any;
declare const max: any;
export { min, max, pageWidth };
