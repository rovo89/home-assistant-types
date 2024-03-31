import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { EntityConfig, LovelaceRow } from "./types";
declare class HuiLockEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _callService;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lock-entity-row": HuiLockEntityRow;
    }
}
export {};
