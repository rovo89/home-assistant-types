import { TimeScale } from "chart.js";
export declare class TimeLineScale extends TimeScale {
    static id: string;
    static defaults: {
        position: string;
        tooltips: {
            mode: string;
        };
        ticks: {
            autoSkip: boolean;
        };
    };
    determineDataLimits(): void;
}
