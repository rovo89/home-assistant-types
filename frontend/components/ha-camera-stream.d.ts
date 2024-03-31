import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { CameraEntity } from "../data/camera";
import { HomeAssistant } from "../types";
import "./ha-hls-player";
import "./ha-web-rtc-player";
export declare class HaCameraStream extends LitElement {
    hass?: HomeAssistant;
    stateObj?: CameraEntity;
    controls: boolean;
    muted: boolean;
    allowExoPlayer: boolean;
    private _posterUrl?;
    private _forceMJPEG?;
    private _url?;
    private _connected;
    willUpdate(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get _shouldRenderMJPEG();
    private _getPosterUrl;
    private _getStreamUrl;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-camera-stream": HaCameraStream;
    }
}
