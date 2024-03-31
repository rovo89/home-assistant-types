import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-absolute-time";
import "../../../components/ha-relative-time";
import { LightEntity } from "../../../data/light";
import "../../../panels/lovelace/components/hui-timestamp-display";
import { HomeAssistant } from "../../../types";
export declare class HaMoreInfoStateHeader extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    stateOverride?: string;
    changedOverride?: number;
    private _absoluteTime;
    private _localizeState;
    private _toggleAbsolute;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-state-header": HaMoreInfoStateHeader;
    }
}
