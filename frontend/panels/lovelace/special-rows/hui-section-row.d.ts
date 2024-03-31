import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { LovelaceRow, SectionConfig } from "../entity-rows/types";
declare class HuiSectionRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: SectionConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-row": HuiSectionRow;
    }
}
export {};
