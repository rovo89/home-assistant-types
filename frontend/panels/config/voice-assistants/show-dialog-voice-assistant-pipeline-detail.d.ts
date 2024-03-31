import { AssistPipeline, AssistPipelineMutableParams } from "../../../data/assist_pipeline";
export interface VoiceAssistantPipelineDetailsDialogParams {
    cloudActiveSubscription?: boolean;
    pipeline?: AssistPipeline;
    preferred?: boolean;
    createPipeline: (values: AssistPipelineMutableParams) => Promise<unknown>;
    updatePipeline: (updates: AssistPipelineMutableParams) => Promise<unknown>;
    setPipelinePreferred: () => Promise<unknown>;
    deletePipeline: () => Promise<boolean>;
}
export declare const loadVoiceAssistantPipelineDetailDialog: () => Promise<typeof import("./dialog-voice-assistant-pipeline-detail")>;
export declare const showVoiceAssistantPipelineDetailDialog: (element: HTMLElement, dialogParams: VoiceAssistantPipelineDetailsDialogParams) => void;
