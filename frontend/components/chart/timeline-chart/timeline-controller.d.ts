import { BarController, BarElement } from "chart.js";
export declare class TimelineController extends BarController {
    static id: string;
    static defaults: {
        dataElementType: string;
        dataElementOptions: string[];
        elements: {
            showText: boolean;
            textPadding: number;
            minBarWidth: number;
        };
        layout: {
            padding: {
                left: number;
                right: number;
                top: number;
                bottom: number;
            };
        };
    };
    static overrides: {
        maintainAspectRatio: boolean;
        plugins: {
            legend: {
                display: boolean;
            };
        };
    };
    parseObjectData(meta: any, data: any, start: any, count: any): any[];
    getLabelAndValue(index: any): {
        label: string;
        value: string;
    };
    updateElements(bars: BarElement[], start: number, count: number, mode: "reset" | "resize" | "none" | "hide" | "show" | "default" | "active"): void;
    removeHoverStyle(_element: any, _datasetIndex: any, _index: any): void;
    setHoverStyle(_element: any, _datasetIndex: any, _index: any): void;
}
