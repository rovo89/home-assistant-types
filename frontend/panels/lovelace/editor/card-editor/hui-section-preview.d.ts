import { PropertyValues, ReactiveElement } from "lit";
import { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import { HomeAssistant } from "../../../../types";
import { LovelaceConfig } from "../../../../data/lovelace/config/types";
export declare class HuiSectionPreview extends ReactiveElement {
    hass?: HomeAssistant;
    lovelace?: LovelaceConfig;
    config?: LovelaceSectionConfig;
    private _element?;
    private get _error();
    constructor();
    protected createRenderRoot(): this;
    protected update(changedProperties: PropertyValues): void;
    private _createSection;
    private _cleanup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-preview": HuiSectionPreview;
    }
}
