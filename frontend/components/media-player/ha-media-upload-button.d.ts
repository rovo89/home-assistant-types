import "@material/mwc-button";
import { LitElement, nothing } from "lit";
import { MediaPlayerItem } from "../../data/media-player";
import type { HomeAssistant } from "../../types";
import "../ha-circular-progress";
import "../ha-svg-icon";
declare global {
    interface HASSDomEvents {
        uploading: unknown;
        "media-refresh": unknown;
    }
}
declare class MediaUploadButton extends LitElement {
    hass: HomeAssistant;
    currentItem?: MediaPlayerItem;
    _uploading: number;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startUpload;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-upload-button": MediaUploadButton;
    }
}
export {};
