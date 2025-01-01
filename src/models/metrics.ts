export interface Metrics {
    timestamp: Date;
    cpuUsage: number;
    memoryUsage: number;
    diskUsage: number;
    temperature: number;
    fanStatus: string;
    powerUsage: number;
    interfaceTraffic: {
        interfaceName: string;
        incomingRate: number;
        outgoingRate: number;
    }[];
    fiberOpticAttenuation: number;
}