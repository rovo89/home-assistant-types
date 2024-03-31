import { CSSResultGroup, LitElement } from "lit";
export type TileImageStyle = "square" | "rounded-square" | "circle";
export declare class HaTileImage extends LitElement {
    imageUrl?: string;
    imageAlt?: string;
    imageStyle: TileImageStyle;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-image": HaTileImage;
    }
}
