import { ReactiveElement } from "lit";
import { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
export type IframeViewStrategyConfig = {
    type: "iframe";
    url: string;
    title?: string;
};
export declare class IframeViewStrategy extends ReactiveElement {
    static generate(config: IframeViewStrategyConfig): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "iframe-view-strategy": IframeViewStrategy;
    }
}
