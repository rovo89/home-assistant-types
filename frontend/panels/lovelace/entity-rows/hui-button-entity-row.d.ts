import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { ActionRowConfig, LovelaceRow } from "./types";
declare class HuiButtonEntityRow extends LitElement implements LovelaceRow {
    hass: HomeAssistant;
    private _config?;
    setConfig(config: ActionRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _pressButton;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-entity-row": HuiButtonEntityRow;
    }
}
export {};
