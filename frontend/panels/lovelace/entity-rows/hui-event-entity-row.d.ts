import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import "../components/hui-timestamp-display";
import { TimestampRenderingFormat } from "../components/types";
import { LovelaceRow } from "./types";
interface EventEntityConfig extends EntitiesCardEntityConfig {
    format?: TimestampRenderingFormat;
}
declare class HuiEventEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EventEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-event-entity-row": HuiEventEntityRow;
    }
}
export {};
