/**
 * Sort function to help sort states by name
 *
 * Usage:
 *   const states = [state1, state2]
 *   states.sort(statessortStatesByName);
 */
import { HassEntity } from "home-assistant-js-websocket";
export declare const sortStatesByName: (entityA: HassEntity, entityB: HassEntity) => 0 | 1 | -1;
