import { CSSResultGroup, LitElement, nothing } from "lit";
import { User } from "../../data/user";
import type { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "./ha-user-picker";
declare class HaUsersPickerLight extends LitElement {
    hass?: HomeAssistant;
    value?: string[];
    pickedUserLabel?: string;
    pickUserLabel?: string;
    users?: User[];
    disabled: boolean;
    protected firstUpdated(changedProps: any): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _notSelectedUsers;
    private _notSelectedUsersAndSelected;
    private get _currentUsers();
    private _updateUsers;
    private _userChanged;
    private _addUser;
    private _removeUser;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-users-picker": HaUsersPickerLight;
    }
}
export {};
