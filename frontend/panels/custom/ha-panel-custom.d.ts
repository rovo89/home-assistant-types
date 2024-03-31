import { PropertyValues, ReactiveElement } from "lit";
import { NavigateOptions } from "../../common/navigate";
import { CustomPanelInfo } from "../../data/panel_custom";
import { HomeAssistant, Route } from "../../types";
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-custom": HaPanelCustom;
    }
    interface Window {
        customPanel: HaPanelCustom | undefined;
    }
}
export declare class HaPanelCustom extends ReactiveElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    panel: CustomPanelInfo;
    private _setProperties?;
    protected createRenderRoot(): this;
    navigate: (path: string, options?: NavigateOptions) => void;
    registerIframe(initialize: any, setProperties: any): void;
    disconnectedCallback(): void;
    protected update(changedProps: PropertyValues): void;
    private _cleanupPanel;
    private _createPanel;
}
