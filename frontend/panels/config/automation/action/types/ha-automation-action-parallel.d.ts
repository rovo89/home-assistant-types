import { CSSResultGroup, LitElement } from "lit";
import "../../../../../components/ha-textfield";
import { ParallelAction } from "../../../../../data/script";
import type { HomeAssistant, ItemPath } from "../../../../../types";
import "../ha-automation-action";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaParallelAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    path?: ItemPath;
    action: ParallelAction;
    static get defaultConfig(): {
        parallel: any[];
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _actionsChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-parallel": HaParallelAction;
    }
}
