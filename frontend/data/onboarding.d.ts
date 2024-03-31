import { HomeAssistant } from "../types";
export interface InstallationType {
    installation_type: "Home Assistant Operating System" | "Home Assistant Container" | "Home Assistant Supervised" | "Home Assistant Core" | "Unknown";
}
export interface OnboardingCoreConfigStepResponse {
}
export interface OnboardingUserStepResponse {
    auth_code: string;
}
export interface OnboardingIntegrationStepResponse {
    auth_code: string;
}
export interface OnboardingAnalyticsStepResponse {
}
export interface OnboardingResponses {
    user: OnboardingUserStepResponse;
    core_config: OnboardingCoreConfigStepResponse;
    integration: OnboardingIntegrationStepResponse;
    analytics: OnboardingAnalyticsStepResponse;
}
export type ValidOnboardingStep = keyof OnboardingResponses;
export interface OnboardingStep {
    step: ValidOnboardingStep;
    done: boolean;
}
export declare const fetchOnboardingOverview: () => Promise<Response>;
export declare const onboardUserStep: (params: {
    client_id: string;
    name: string;
    username: string;
    password: string;
    language: string;
}) => Promise<OnboardingUserStepResponse>;
export declare const onboardCoreConfigStep: (hass: HomeAssistant) => Promise<OnboardingCoreConfigStepResponse>;
export declare const onboardAnalyticsStep: (hass: HomeAssistant) => Promise<OnboardingAnalyticsStepResponse>;
export declare const onboardIntegrationStep: (hass: HomeAssistant, params: {
    client_id: string;
    redirect_uri: string;
}) => Promise<OnboardingIntegrationStepResponse>;
export declare const fetchInstallationType: () => Promise<InstallationType>;
