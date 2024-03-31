import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../../types";
import "../../../../components/ha-svg-icon";
export declare class VoiceAssistantExposeAssistantIcon extends LitElement {
    hass: HomeAssistant;
    unsupported: boolean;
    manual: boolean;
    assistant?: "conversation" | "cloud.alexa" | "cloud.google_assistant";
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "voice-assistants-expose-assistant-icon": VoiceAssistantExposeAssistantIcon;
    }
}
