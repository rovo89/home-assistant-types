import { LitElement } from "lit";
import "../../../../../components/ha-selector/ha-selector-media";
import { PlayMediaAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaPlayMediaAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: PlayMediaAction;
    narrow: boolean;
    static get defaultConfig(): PlayMediaAction;
    private _getSelectorValue;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-play_media": HaPlayMediaAction;
    }
}
