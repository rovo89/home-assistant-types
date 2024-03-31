import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-settings-row";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import { CloudStatusLoggedIn } from "../../../data/cloud";
import { ExposeEntitySettings } from "../../../data/expose";
import { HomeAssistant } from "../../../types";
export declare class CloudGooglePref extends LitElement {
    hass: HomeAssistant;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    cloudStatus?: CloudStatusLoggedIn;
    private _exposeNew?;
    protected willUpdate(): void;
    private _exposedEntitiesCount;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _exposeNewToggleChanged;
    private _enabledToggleChanged;
    private _reportToggleChanged;
    private _pinChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-google-pref": CloudGooglePref;
    }
}
