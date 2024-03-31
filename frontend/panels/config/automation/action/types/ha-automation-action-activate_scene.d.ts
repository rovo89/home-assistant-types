import { LitElement } from "lit";
import "../../../../../components/entity/ha-entity-picker";
import { SceneAction } from "../../../../../data/script";
import { HomeAssistant } from "../../../../../types";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaSceneAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: SceneAction;
    static get defaultConfig(): SceneAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _entityPicked;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-activate_scene": HaSceneAction;
    }
}
