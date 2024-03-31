import { LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { TimestampRenderingFormat } from "./types";
declare class HuiTimestampDisplay extends LitElement {
    hass?: HomeAssistant;
    ts?: Date;
    format?: TimestampRenderingFormat;
    capitalize: boolean;
    private _relative?;
    private _connected?;
    private _interval?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProperties: PropertyValues): void;
    private get _format();
    private _startInterval;
    private _clearInterval;
    private _updateRelative;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-timestamp-display": HuiTimestampDisplay;
    }
}
export {};
