import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-label-badge";
import "../../../components/ha-svg-icon";
import { HomeAssistant } from "../../../types";
import { LovelaceBadge } from "../types";
import { ErrorBadgeConfig } from "./types";
export declare const createErrorBadgeElement: (config: any) => HuiErrorBadge;
export declare const createErrorBadgeConfig: (error: any) => {
    type: string;
    error: any;
};
export declare class HuiErrorBadge extends LitElement implements LovelaceBadge {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ErrorBadgeConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-error-badge": HuiErrorBadge;
    }
}
