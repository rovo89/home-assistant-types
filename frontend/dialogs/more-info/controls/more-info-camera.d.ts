import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-camera-stream";
import { CameraEntity } from "../../../data/camera";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoCamera extends LitElement {
    hass?: HomeAssistant;
    stateObj?: CameraEntity;
    private _attached;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-camera": MoreInfoCamera;
    }
}
export {};
