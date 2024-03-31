import { CSSResultGroup, LitElement, TemplateResult } from "lit";
declare class MQTTDiscoveryPayload extends LitElement {
    payload: Record<string, unknown>;
    showAsYaml: boolean;
    summary: string;
    private _open;
    protected render(): TemplateResult;
    private _renderPayload;
    private _handleToggle;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "mqtt-discovery-payload": MQTTDiscoveryPayload;
    }
}
export {};
