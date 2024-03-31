import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import { LovelaceHeaderFooter } from "../types";
import { PictureHeaderFooterConfig } from "./types";
export declare class HuiPictureHeaderFooter extends LitElement implements LovelaceHeaderFooter {
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    type: "header" | "footer";
    protected _config?: PictureHeaderFooterConfig;
    getCardSize(): number;
    setConfig(config: PictureHeaderFooterConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-header-footer": HuiPictureHeaderFooter;
    }
}
