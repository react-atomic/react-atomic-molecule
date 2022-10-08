export default css;
declare namespace css {
    const candleInTheWindCss: (string | {
        opacity: number;
        animationFillMode: string;
    })[];
    const candleInTheWindKeyframes: (string[] | ({
        opacity: number;
        transform?: undefined;
    } | {
        opacity: number;
        transform: string[];
    })[])[];
}
