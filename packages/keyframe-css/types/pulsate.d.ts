export default css;
declare namespace css {
    const pulsate: (string[] | ({
        transform: string[];
        opacity: number;
        filter: string;
        msFilter: string;
    } | {
        opacity: number;
        filter: string;
        msFilter: string;
        transform?: undefined;
    } | {
        transform: string[];
        filter: string;
        msFilter: string;
        opacity?: undefined;
    })[])[];
}
export const aniName: "pulsate";
