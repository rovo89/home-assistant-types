import type { ChartType } from "chart.js";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { Statistics, StatisticsMetaData, StatisticType } from "../../data/recorder";
import type { HomeAssistant } from "../../types";
import "./ha-chart-base";
import type { ChartResizeOptions } from "./ha-chart-base";
export declare const supportedStatTypeMap: Record<StatisticType, StatisticType>;
export declare class StatisticsChart extends LitElement {
    hass: HomeAssistant;
    statisticsData?: Statistics;
    metadata?: Record<string, StatisticsMetaData>;
    names?: Record<string, string>;
    unit?: string;
    endTime?: Date;
    statTypes: Array<StatisticType>;
    chartType: ChartType;
    hideLegend: boolean;
    logarithmicScale: boolean;
    isLoadingData: boolean;
    clickForMoreInfo: boolean;
    period?: string;
    private _chartData;
    private _chartDatasetExtra;
    private _statisticIds;
    private _chartOptions?;
    private _hiddenStats;
    private _chart?;
    private _computedStyle?;
    resize: (options?: ChartResizeOptions) => void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(changedProps: PropertyValues): void;
    firstUpdated(): void;
    protected render(): TemplateResult;
    private _datasetHidden;
    private _datasetUnhidden;
    private _createOptions;
    private _getStatisticsMetaData;
    private _generateData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "statistics-chart": StatisticsChart;
    }
}
