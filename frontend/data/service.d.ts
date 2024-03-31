/// <reference types="mocha" />
import { Context, HomeAssistant } from "../types";
import { Action } from "./script";
export declare const callExecuteScript: (hass: HomeAssistant, sequence: Action | Action[]) => Promise<{
    context: Context;
    response: Record<string, any>;
}>;
export declare const serviceCallWillDisconnect: (domain: string, service: string, serviceData?: Record<string, any>) => boolean;
