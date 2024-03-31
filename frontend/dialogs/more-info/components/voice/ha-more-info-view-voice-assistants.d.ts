import { CSSResultGroup, LitElement, nothing } from "lit";
import { ExtEntityRegistryEntry } from "../../../../data/entity_registry";
import "../../../../panels/config/voice-assistants/entity-voice-settings";
import { HomeAssistant } from "../../../../types";
declare class MoreInfoViewVoiceAssistants extends LitElement {
    hass: HomeAssistant;
    entry: ExtEntityRegistryEntry;
    params?: any;
    private _calculateExposed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-view-voice-assistants": MoreInfoViewVoiceAssistants;
    }
}
export {};
