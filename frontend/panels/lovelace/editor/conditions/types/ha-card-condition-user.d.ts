import "@material/mwc-list";
import { LitElement, PropertyValues } from "lit";
import "../../../../../components/ha-check-list-item";
import "../../../../../components/ha-switch";
import "../../../../../components/user/ha-user-badge";
import type { HomeAssistant } from "../../../../../types";
import { UserCondition } from "../../../common/validate-condition";
export declare class HaCardConditionUser extends LitElement {
    hass: HomeAssistant;
    condition: UserCondition;
    disabled: boolean;
    static get defaultConfig(): UserCondition;
    private _users;
    protected static validateUIConfig(condition: UserCondition): void;
    private _sortedUsers;
    protected firstUpdated(changedProps: PropertyValues): Promise<void>;
    private _fetchUsers;
    protected render(): import("lit-html").TemplateResult<1>;
    private _userChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-user": HaCardConditionUser;
    }
}
