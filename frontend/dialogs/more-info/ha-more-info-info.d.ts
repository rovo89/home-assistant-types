import { LitElement } from "lit";
import { ChartResizeOptions } from "../../components/chart/ha-chart-base";
import { ExtEntityRegistryEntry } from "../../data/entity_registry";
import type { HomeAssistant } from "../../types";
import "./ha-more-info-history";
import "./ha-more-info-logbook";
import "./more-info-content";
export declare class MoreInfoInfo extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _history?;
    resize(options?: ChartResizeOptions): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-info": MoreInfoInfo;
    }
}
