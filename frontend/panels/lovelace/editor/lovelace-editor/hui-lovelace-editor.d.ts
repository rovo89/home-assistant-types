import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../../components/ha-textfield";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "lovelace-config-changed": {
            config: LovelaceConfig;
        };
    }
}
export declare class HuiLovelaceEditor extends LitElement {
    hass: HomeAssistant;
    config?: LovelaceConfig;
    get _title(): string;
    protected render(): TemplateResult;
    private _valueChanged;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lovelace-editor": HuiLovelaceEditor;
    }
}
