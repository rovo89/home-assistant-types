import { LitElement, nothing } from "lit";
import "../../layouts/hass-error-screen";
import { HomeAssistant, Route } from "../../types";
export declare const getMyRedirects: (hasSupervisor: boolean) => Redirects;
export type ParamType = "url" | "string" | "string?";
export type Redirects = {
    [key: string]: Redirect;
};
export interface Redirect {
    redirect: string;
    navigate_outside_spa?: boolean;
    component?: string;
    params?: {
        [key: string]: ParamType;
    };
    optional_params?: {
        [key: string]: ParamType;
    };
}
declare class HaPanelMy extends LitElement {
    hass: HomeAssistant;
    route: Route;
    _error?: string;
    private _redirect?;
    connectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _createRedirectUrl;
    private _createRedirectParams;
    private _checkParamType;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-my": HaPanelMy;
    }
}
export {};
