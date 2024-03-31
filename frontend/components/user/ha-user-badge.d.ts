import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { User } from "../../data/user";
import { CurrentUser, HomeAssistant } from "../../types";
declare class UserBadge extends LitElement {
    hass: HomeAssistant;
    user?: User | CurrentUser;
    private _personPicture?;
    private _personEntityId?;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getPersonPicture;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-user-badge": UserBadge;
    }
}
export {};
