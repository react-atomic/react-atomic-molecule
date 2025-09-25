export default css;
declare namespace css {
    let candleInTheWindCss: (string | {
        opacity: number;
        animationFillMode: string;
    })[];
    let candleInTheWindKeyframes: (string[] | ({
        opacity: number;
        transform?: undefined;
    } | {
        opacity: number;
        transform: string[];
    })[])[];
}
