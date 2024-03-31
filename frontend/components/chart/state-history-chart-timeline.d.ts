import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { TimelineEntity } from "../../data/history";
import { HomeAssistant } from "../../types";
import { ChartResizeOptions } from "./ha-chart-base";
export declare class StateHistoryChartTimeline extends LitElement {
    hass: HomeAssistant;
    data: TimelineEntity[];
    narrow: boolean;
    names?: Record<string, string>;
    unit?: string;
    identifier?: string;
    showNames: boolean;
    clickForMoreInfo: boolean;
    chunked: boolean;
    startTime: Date;
    endTime: Date;
    paddingYAxis: number;
    chartIndex?: any;
    private _chartData?;
    private _chartOptions?;
    private _yWidth;
    private _chartTime;
    private _chart?;
    resize: (options?: ChartResizeOptions) => void;
    protected render(): import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues): void;
    private _createOptions;
    private _generateData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-chart-timeline": StateHistoryChartTimeline;
    }
}
