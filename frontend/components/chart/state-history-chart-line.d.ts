import { LitElement, PropertyValues } from "lit";
import { LineChartEntity } from "../../data/history";
import { HomeAssistant } from "../../types";
import { ChartResizeOptions } from "./ha-chart-base";
export declare class StateHistoryChartLine extends LitElement {
    hass: HomeAssistant;
    data: LineChartEntity[];
    names?: Record<string, string>;
    unit?: string;
    identifier?: string;
    showNames: boolean;
    clickForMoreInfo: boolean;
    startTime: Date;
    endTime: Date;
    paddingYAxis: number;
    chartIndex?: any;
    logarithmicScale: boolean;
    minYAxis?: number;
    maxYAxis?: number;
    fitYData: boolean;
    private _chartData?;
    private _entityIds;
    private _datasetToDataIndex;
    private _chartOptions?;
    private _yWidth;
    private _chartTime;
    private _chart?;
    resize: (options?: ChartResizeOptions) => void;
    protected render(): import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues): void;
    private _generateData;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-chart-line": StateHistoryChartLine;
    }
}
