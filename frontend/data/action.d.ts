import { AutomationElementGroup } from "./automation";
export declare const ACTION_ICONS: {
    readonly condition: string;
    readonly delay: string;
    readonly event: string;
    readonly play_media: string;
    readonly activate_scene: string;
    readonly service: string;
    readonly wait_template: string;
    readonly wait_for_trigger: string;
    readonly repeat: string;
    readonly choose: string;
    readonly if: string;
    readonly device_id: string;
    readonly stop: string;
    readonly parallel: string;
    readonly variables: string;
    readonly set_conversation_response: string;
};
export declare const YAML_ONLY_ACTION_TYPES: Set<"service" | "stop" | "parallel" | "event" | "condition" | "play_media" | "delay" | "wait_template" | "wait_for_trigger" | "device_id" | "activate_scene" | "repeat" | "choose" | "if" | "variables" | "set_conversation_response">;
export declare const ACTION_GROUPS: AutomationElementGroup;
export declare const SERVICE_PREFIX = "__SERVICE__";
export declare const isService: (key: string | undefined) => boolean | undefined;
export declare const getService: (key: string) => string;
