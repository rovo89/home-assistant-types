import { HomeAssistant } from "../../../types";
import { Lovelace } from "../types";
import { LovelaceCardPath } from "./lovelace-path";
export declare function confDeleteCard(element: HTMLElement, hass: HomeAssistant, lovelace: Lovelace, path: LovelaceCardPath): Promise<void>;
