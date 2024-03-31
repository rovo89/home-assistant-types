import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-alert";
/**
 * A WebRTC stream is established by first sending an offer through a signal
 * path via an integration. An answer is returned, then the rest of the stream
 * is handled entirely client side.
 */
declare class HaWebRtcPlayer extends LitElement {
    hass: HomeAssistant;
    entityid: string;
    controls: boolean;
    muted: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    posterUrl: string;
    private _error?;
    private _videoEl;
    private _peerConnection?;
    private _remoteStream?;
    protected render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _startWebRtc;
    private _fetchPeerConfiguration;
    private _cleanUp;
    private _loadedData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-web-rtc-player": HaWebRtcPlayer;
    }
}
export {};
