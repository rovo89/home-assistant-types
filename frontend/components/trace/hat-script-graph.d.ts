import { LitElement, PropertyValues } from "lit";
import { TraceExtended } from "../../data/trace";
import { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "../ha-service-icon";
import "./hat-graph-branch";
import "./hat-graph-node";
import "./hat-graph-spacer";
export interface NodeInfo {
    path: string;
    config: any;
}
declare global {
    interface HASSDomEvents {
        "graph-node-selected": NodeInfo;
    }
}
export declare class HatScriptGraph extends LitElement {
    trace: TraceExtended;
    selected?: string;
    hass: HomeAssistant;
    renderedNodes: Record<string, NodeInfo>;
    trackedNodes: Record<string, NodeInfo>;
    private selectNode;
    private render_trigger;
    private render_condition;
    private typeRenderers;
    private render_action_node;
    private render_choose_node;
    private render_if_node;
    private render_condition_node;
    private render_repeat_node;
    private render_service_node;
    private render_wait_node;
    private render_parallel_node;
    private render_other_node;
    protected render(): import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _previousTrackedNode;
    private _nextTrackedNode;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-script-graph": HatScriptGraph;
    }
}
