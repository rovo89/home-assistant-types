export declare const toRadian: (angle: number) => number;
type ArcOptions = {
    x: number;
    y: number;
    r: number;
    start: number;
    end: number;
    rotate?: number;
};
export declare const svgArc: (options: ArcOptions) => string;
export {};
