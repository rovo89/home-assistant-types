import { BarElement, BarOptions, BarProps } from "chart.js";
export interface TextBarProps extends BarProps {
    text?: string | null;
    options?: Partial<TextBaroptions>;
}
export interface TextBaroptions extends BarOptions {
    textPad?: number;
    textColor?: string;
    backgroundColor: string;
}
export declare class TextBarElement extends BarElement {
    static id: string;
    draw(ctx: CanvasRenderingContext2D): void;
    tooltipPosition(useFinalPosition: boolean): {
        x: number;
        y: number;
    };
}
