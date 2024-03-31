import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-icon";
import { LovelaceRow, TextConfig } from "../entity-rows/types";
declare class HuiTextRow extends LitElement implements LovelaceRow {
    private _config?;
    setConfig(config: TextConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-text-row": HuiTextRow;
    }
}
export {};
