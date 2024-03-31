import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { LocalizeFunc } from "../common/translations/localize";
import type { Analytics, AnalyticsPreferences } from "../data/analytics";
import "./ha-settings-row";
import "./ha-switch";
declare global {
    interface HASSDomEvents {
        "analytics-preferences-changed": {
            preferences: AnalyticsPreferences;
        };
    }
}
export declare class HaAnalytics extends LitElement {
    localize: LocalizeFunc;
    analytics?: Analytics;
    translationKeyPanel: "page-onboarding" | "config";
    protected render(): TemplateResult;
    protected updated(changedProps: any): void;
    private _handleRowClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-analytics": HaAnalytics;
    }
}
