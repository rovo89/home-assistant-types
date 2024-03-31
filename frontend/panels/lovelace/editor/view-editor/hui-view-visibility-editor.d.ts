import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../components/user/ha-user-badge";
import { LovelaceViewConfig, ShowViewConfig } from "../../../../data/lovelace/config/view";
import { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "view-visibility-changed": {
            visible: ShowViewConfig[];
        };
    }
}
export declare class HuiViewVisibilityEditor extends LitElement {
    set config(config: LovelaceViewConfig);
    hass: HomeAssistant;
    private _config;
    private _users;
    private _visible;
    private _sortedUsers;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected checkUser(userId: string): boolean;
    private valChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-visibility-editor": HuiViewVisibilityEditor;
    }
}
