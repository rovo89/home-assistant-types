import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import "../components/hui-image";
import { ImageElementConfig, LovelaceElement } from "./types";
export declare class HuiImageElement extends LitElement implements LovelaceElement {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ImageElementConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-image-element": HuiImageElement;
    }
}
