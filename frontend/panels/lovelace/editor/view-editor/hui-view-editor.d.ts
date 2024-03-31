import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "view-config-changed": {
            config: LovelaceViewConfig;
        };
    }
}
export declare class HuiViewEditor extends LitElement {
    hass: HomeAssistant;
    isNew: boolean;
    private _config;
    private _suggestedPath;
    private _schema;
    set config(config: LovelaceViewConfig);
    get _type(): string;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabel;
    private _computeHelper;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-editor": HuiViewEditor;
    }
}
