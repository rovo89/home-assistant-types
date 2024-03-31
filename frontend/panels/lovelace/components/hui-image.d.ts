import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-camera-stream";
import "../../../components/ha-circular-progress";
import { HomeAssistant } from "../../../types";
export interface StateSpecificConfig {
    [state: string]: string;
}
export declare class HuiImage extends LitElement {
    hass?: HomeAssistant;
    entity?: string;
    image?: string;
    stateImage?: StateSpecificConfig;
    cameraImage?: string;
    cameraView?: "live" | "auto";
    aspectRatio?: string;
    filter?: string;
    stateFilter?: StateSpecificConfig;
    darkModeImage?: string;
    darkModeFilter?: string;
    fitMode?: "cover" | "contain" | "fill";
    private _imageVisible?;
    private _loadState?;
    private _cameraImageSrc?;
    private _loadedImageSrc?;
    private _lastImageHeight?;
    private _intersectionObserver?;
    private _cameraUpdater?;
    private _ratio;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected handleIntersectionCallback(entries: IntersectionObserverEntry[]): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _shouldStartCameraUpdates(oldHass?: HomeAssistant): boolean;
    private _startIntersectionObserverOrUpdates;
    private _stopIntersectionObserver;
    private _startUpdateCameraInterval;
    private _stopUpdateCameraInterval;
    private _onImageError;
    private _onImageLoad;
    private _onVideoLoad;
    private _updateCameraImageSrcAtInterval;
    private _updateCameraImageSrc;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-image": HuiImage;
    }
}
