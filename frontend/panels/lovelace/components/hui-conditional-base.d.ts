import { PropertyValues, ReactiveElement } from "lit";
import { HomeAssistant } from "../../../types";
import { ConditionalCardConfig } from "../cards/types";
import { ConditionalRowConfig, LovelaceRow } from "../entity-rows/types";
import { LovelaceCard } from "../types";
export declare class HuiConditionalBase extends ReactiveElement {
    hass?: HomeAssistant;
    editMode: boolean;
    protected _config?: ConditionalCardConfig | ConditionalRowConfig;
    protected _element?: LovelaceCard | LovelaceRow;
    private _mediaQueriesListeners;
    private _mediaQueries;
    protected createRenderRoot(): this;
    protected validateConfig(config: ConditionalCardConfig | ConditionalRowConfig): void;
    disconnectedCallback(): void;
    connectedCallback(): void;
    private _clearMediaQueries;
    private _listenMediaQueries;
    protected update(changed: PropertyValues): void;
    private _updateVisibility;
    private _setVisibility;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-base": HuiConditionalBase;
    }
}
