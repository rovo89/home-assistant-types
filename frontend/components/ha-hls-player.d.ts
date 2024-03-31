import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-alert";
declare class HaHLSPlayer extends LitElement {
    hass: HomeAssistant;
    url: string;
    posterUrl: string;
    controls: boolean;
    muted: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    allowExoPlayer: boolean;
    private _videoEl;
    private _error?;
    private _errorIsFatal;
    private _hlsPolyfillInstance?;
    private _exoPlayer;
    private static streamCount;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues): void;
    private _startHls;
    private _renderHLSExoPlayer;
    private _resizeExoPlayer;
    private _isLLHLSSupported;
    private _renderHLSPolyfill;
    private _renderHLSNative;
    private _cleanUp;
    private _resetError;
    private _setFatalError;
    private _setRetryableError;
    private _loadedData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-hls-player": HaHLSPlayer;
    }
}
export {};
