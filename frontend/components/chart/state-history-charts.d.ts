import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { HistoryResult } from "../../data/history";
import type { HomeAssistant } from "../../types";
import "./state-history-chart-line";
import "./state-history-chart-timeline";
import { ChartResizeOptions } from "./ha-chart-base";
declare global {
    interface HASSDomEvents {
        "y-width-changed": {
            value: number;
            chartIndex: number;
        };
    }
}
export declare class StateHistoryCharts extends LitElement {
    hass: HomeAssistant;
    historyData: HistoryResult;
    narrow: boolean;
    names?: Record<string, string>;
    virtualize: boolean;
    endTime?: Date;
    startTime?: Date;
    upToNow: boolean;
    hoursToShow?: number;
    showNames: boolean;
    clickForMoreInfo: boolean;
    isLoadingData: boolean;
    logarithmicScale: boolean;
    minYAxis?: number;
    maxYAxis?: number;
    fitYData: boolean;
    private _computedStartTime;
    private _computedEndTime;
    private _maxYWidth;
    private _childYWidths;
    private _chartCount;
    private _savedScrollPos?;
    private _charts?;
    resize: (options?: ChartResizeOptions) => void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHistoryItem;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _yWidthChanged;
    private _isHistoryEmpty;
    private _saveScrollPos;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-charts": StateHistoryCharts;
    }
}
