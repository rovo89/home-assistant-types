import { CSSResultGroup, LitElement } from "lit";
import { ChartResizeOptions } from "../../components/chart/ha-chart-base";
import { HomeAssistant } from "../../types";
import "./ha-more-info-history";
import "./ha-more-info-logbook";
export declare class MoreInfoHistoryAndLogbook extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    private _history?;
    resize(options?: ChartResizeOptions): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-history-and-logbook": MoreInfoHistoryAndLogbook;
    }
}
