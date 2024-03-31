import "@material/mwc-list/mwc-list-item";
import { LitElement, PropertyValues, nothing } from "lit";
import "../../../../../components/ha-select";
import { TagTrigger } from "../../../../../data/automation";
import { HomeAssistant } from "../../../../../types";
import { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaTagTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: TagTrigger;
    disabled: boolean;
    private _tags?;
    static get defaultConfig(): {
        tag_id: string;
    };
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchTags;
    private _tagChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-tag": HaTagTrigger;
    }
}
