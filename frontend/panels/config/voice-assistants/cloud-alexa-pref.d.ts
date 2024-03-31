import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-settings-row";
import "../../../components/ha-switch";
import { CloudStatusLoggedIn } from "../../../data/cloud";
import { ExposeEntitySettings } from "../../../data/expose";
import type { HomeAssistant } from "../../../types";
export declare class CloudAlexaPref extends LitElement {
    hass: HomeAssistant;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    cloudStatus?: CloudStatusLoggedIn;
    private _exposeNew?;
    private _exposedEntitiesCount;
    protected willUpdate(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _exposeNewToggleChanged;
    private _enabledToggleChanged;
    private _reportToggleChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-alexa-pref": CloudAlexaPref;
    }
}
