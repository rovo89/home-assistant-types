import type { Chart, ChartType, ChartData, ChartOptions } from "chart.js";
import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { HomeAssistant } from "../../types";
export declare const MIN_TIME_BETWEEN_UPDATES: number;
export interface ChartResizeOptions {
    aspectRatio?: number;
    height?: number;
    width?: number;
}
export interface ChartDatasetExtra {
    show_legend?: boolean;
    legend_label?: string;
}
export declare class HaChartBase extends LitElement {
    chart?: Chart;
    hass: HomeAssistant;
    chartType: ChartType;
    data: ChartData;
    extraData?: ChartDatasetExtra[];
    options?: ChartOptions;
    plugins?: any[];
    height?: number;
    paddingYAxis: number;
    externalHidden: boolean;
    private _chartHeight?;
    private _tooltip?;
    private _hiddenDatasets;
    private _paddingUpdateCount;
    private _paddingUpdateLock;
    private _paddingYAxisInternal;
    private _datasetOrder;
    disconnectedCallback(): void;
    connectedCallback(): void;
    updateChart: (mode: "resize" | "reset" | "none" | "hide" | "show" | "default" | "active" | undefined) => void;
    resize: (options?: ChartResizeOptions) => void;
    protected firstUpdated(): void;
    shouldUpdate(changedProps: PropertyValues): boolean;
    private _debouncedClearUpdates;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _setupChart;
    private _createOptions;
    private _createPlugins;
    private _legendClick;
    private _handleTooltip;
    private _releaseCanvas;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-chart-base": HaChartBase;
    }
    interface HASSDomEvents {
        "dataset-hidden": {
            index: number;
        };
        "dataset-unhidden": {
            index: number;
        };
    }
}
