import { UnsubscribeFunc } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult, nothing } from "lit";
import { LogbookEntry } from "../../data/logbook";
import { AutomationTraceExtended } from "../../data/trace";
import { HomeAssistant } from "../../types";
import "./ha-timeline";
export declare class HaAutomationTracer extends LitElement {
    hass: HomeAssistant;
    trace?: AutomationTraceExtended;
    logbookEntries?: LogbookEntry[];
    selectedPath?: string;
    allowPick: boolean;
    private _entityReg;
    hassSubscribe(): UnsubscribeFunc[];
    protected render(): typeof nothing | TemplateResult<1>;
    protected updated(props: PropertyValues): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-trace-timeline": HaAutomationTracer;
    }
}
