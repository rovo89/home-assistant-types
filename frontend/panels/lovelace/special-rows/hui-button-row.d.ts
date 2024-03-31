import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-state-icon";
import { HomeAssistant } from "../../../types";
import { ButtonRowConfig, LovelaceRow } from "../entity-rows/types";
export declare class HuiButtonRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ButtonRowConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-row": HuiButtonRow;
    }
}
