import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { LovelaceRow } from "../entity-rows/types";
declare class HuiDividerRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: any): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-divider-row": HuiDividerRow;
    }
}
export {};
