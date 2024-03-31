import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/entity/ha-entity-toggle";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { ActionRowConfig, LovelaceRow } from "./types";
declare class HuiSceneEntityRow extends LitElement implements LovelaceRow {
    hass: HomeAssistant;
    private _config?;
    setConfig(config: ActionRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _callService;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-scene-entity-row": HuiSceneEntityRow;
    }
}
export {};
