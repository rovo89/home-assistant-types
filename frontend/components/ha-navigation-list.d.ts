import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import type { PageNavigation } from "../layouts/hass-tabs-subpage";
import type { HomeAssistant } from "../types";
import "./ha-icon-next";
import "./ha-list-item";
import "./ha-svg-icon";
declare class HaNavigationList extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    pages: PageNavigation[];
    hasSecondary: boolean;
    label?: string;
    render(): TemplateResult;
    private _handleListAction;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-navigation-list": HaNavigationList;
    }
}
export {};
