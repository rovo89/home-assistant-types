import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
import "./ha-multi-textfield";
declare class AliasesEditor extends LitElement {
    hass: HomeAssistant;
    aliases: string[];
    disabled: boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _aliasesChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-aliases-editor": AliasesEditor;
    }
}
export {};
