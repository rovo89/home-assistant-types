import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-icon";
import { HomeAssistant } from "../../../types";
import { LovelaceRow, WeblinkConfig } from "../entity-rows/types";
declare class HuiWeblinkRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: WeblinkConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    protected _computeTargetValue(): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-weblink-row": HuiWeblinkRow;
    }
}
export {};
