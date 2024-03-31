import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-icon";
import { HomeAssistant } from "../../../types";
import { CastConfig, LovelaceRow } from "../entity-rows/types";
declare class HuiCastRow extends LitElement implements LovelaceRow {
    hass: HomeAssistant;
    private _config?;
    private _castManager?;
    private _noHTTPS;
    setConfig(config: CastConfig): void;
    protected shouldUpdate(changedProperties: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    private _sendLovelace;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cast-row": HuiCastRow;
    }
}
export {};
