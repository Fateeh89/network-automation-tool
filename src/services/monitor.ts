import { DeviceHealth, TrafficRate } from '../models/metrics';
import { getDeviceHealth, getTrafficRate } from '../utils/monitorUtils';

export const monitorDeviceHealth = async (deviceId: string): Promise<DeviceHealth> => {
    try {
        const healthData = await getDeviceHealth(deviceId);
        return healthData;
    } catch (error) {
        throw new Error(`Failed to monitor device health: ${error.message}`);
    }
};

export const monitorTrafficRate = async (interfaceId: string): Promise<TrafficRate> => {
    try {
        const trafficData = await getTrafficRate(interfaceId);
        return trafficData;
    } catch (error) {
        throw new Error(`Failed to monitor traffic rate: ${error.message}`);
    }
};