import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { User } from "../../data/user";
import { HomeAssistant } from "../../types";
import "../ha-select";
import "./ha-user-badge";
import "../ha-list-item";
declare class HaUserPicker extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    noUserLabel?: string;
    value: string;
    users?: User[];
    disabled: boolean;
    private _sortedUsers;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    private _userChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-user-picker": HaUserPicker;
    }
}
export {};
