export default css;
declare namespace css {
    let breath: (string[] | ({
        transform: string[];
        opacity?: undefined;
    } | {
        opacity: number;
        transform: string[];
    })[])[];
}
export const aniName: "breath";
