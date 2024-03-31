import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/entity/state-badge";
import "../../../panels/lovelace/components/hui-timestamp-display";
import { HomeAssistant } from "../../../types";
declare class EntityPreviewRow extends LitElement {
    hass: HomeAssistant;
    private stateObj?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "entity-preview-row": EntityPreviewRow;
    }
}
export {};
