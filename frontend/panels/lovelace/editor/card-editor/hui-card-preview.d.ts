import { PropertyValues, ReactiveElement } from "lit";
import { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import { HomeAssistant } from "../../../../types";
export declare class HuiCardPreview extends ReactiveElement {
    hass?: HomeAssistant;
    config?: LovelaceCardConfig;
    private _element?;
    private get _error();
    constructor();
    protected createRenderRoot(): this;
    protected update(changedProperties: PropertyValues): void;
    private _createCard;
    private _cleanup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-preview": HuiCardPreview;
    }
}
