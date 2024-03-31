import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../../components/ha-icon-button";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceHeaderFooterConfig } from "../../header-footer/types";
export declare class HuiHeaderFooterEditor extends LitElement {
    hass: HomeAssistant;
    lovelaceConfig: LovelaceConfig;
    config?: LovelaceHeaderFooterConfig;
    configValue: "header" | "footer";
    protected render(): TemplateResult;
    private _edit;
    private _add;
    private _elementPicked;
    private _delete;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-header-footer-editor": HuiHeaderFooterEditor;
    }
}
