import { HomeAssistant } from "../../types";
interface IpConfiguration {
    address: string[];
    gateway: string;
    method: "disabled" | "static" | "auto";
    nameservers: string[];
}
export interface NetworkInterface {
    primary: boolean;
    privacy: boolean;
    interface: string;
    enabled: boolean;
    ipv4?: Partial<IpConfiguration>;
    ipv6?: Partial<IpConfiguration>;
    type: "ethernet" | "wireless" | "vlan";
    wifi?: Partial<WifiConfiguration>;
}
interface DockerNetwork {
    address: string;
    dns: string;
    gateway: string;
    interface: string;
}
interface AccessPoint {
    mode: "infrastructure" | "mesh" | "adhoc" | "ap";
    ssid: string;
    mac: string;
    frequency: number;
    signal: number;
}
export interface AccessPoints {
    accesspoints: AccessPoint[];
}
export interface WifiConfiguration {
    mode: "infrastructure" | "mesh" | "adhoc" | "ap";
    auth: "open" | "wep" | "wpa-psk";
    ssid: string;
    signal: number;
    psk?: string;
}
export interface NetworkInfo {
    interfaces: NetworkInterface[];
    docker: DockerNetwork;
}
export declare const fetchNetworkInfo: (hass: HomeAssistant) => Promise<NetworkInfo>;
export declare const updateNetworkInterface: (hass: HomeAssistant, network_interface: string, options: Partial<NetworkInterface>) => Promise<void>;
export declare const accesspointScan: (hass: HomeAssistant, network_interface: string) => Promise<AccessPoints>;
export {};
