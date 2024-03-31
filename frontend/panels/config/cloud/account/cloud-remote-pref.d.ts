import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-settings-row";
import "../../../../components/ha-switch";
import { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare class CloudRemotePref extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openCertInfo;
    private _toggleChanged;
    private _toggleAllowRemoteEnabledChanged;
    private _copyURL;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-remote-pref": CloudRemotePref;
    }
}
