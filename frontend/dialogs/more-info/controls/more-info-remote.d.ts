import "@material/mwc-select/mwc-select";
import "@material/mwc-list/mwc-list-item";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import { RemoteEntity } from "../../../data/remote";
import { HomeAssistant } from "../../../types";
declare class MoreInfoRemote extends LitElement {
    hass: HomeAssistant;
    stateObj?: RemoteEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleActivityChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-remote": MoreInfoRemote;
    }
}
export {};
