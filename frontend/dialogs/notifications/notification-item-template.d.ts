import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-card";
export declare class HuiNotificationItemTemplate extends LitElement {
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-item-template": HuiNotificationItemTemplate;
    }
}
