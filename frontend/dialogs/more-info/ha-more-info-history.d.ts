import { LitElement, PropertyValues, nothing } from "lit";
import { ChartResizeOptions } from "../../components/chart/ha-chart-base";
import "../../components/chart/state-history-charts";
import "../../components/chart/statistics-chart";
import { HomeAssistant } from "../../types";
declare global {
    interface HASSDomEvents {
        closed: undefined;
    }
}
export declare class MoreInfoHistory extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    private _stateHistory?;
    private _statistics?;
    private _showMoreHref;
    private _statNames?;
    private _interval?;
    private _subscribed?;
    private _error?;
    private _metadata?;
    private _chart?;
    resize: (options?: ChartResizeOptions) => void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _unsubscribeHistory;
    private _redrawGraph;
    private _setRedrawTimer;
    private _getStatisticsMetaData;
    private _getStateHistory;
    private _close;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-history": MoreInfoHistory;
    }
}
