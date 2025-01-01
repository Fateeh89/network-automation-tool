export interface Device {
    id: string;
    name: string;
    type: string;
    osType: string;
}

const devices: Device[] = [];

export function addDevice(device: Device): void {
    devices.push(device);
}

export function editDevice(id: string, updatedDevice: Device): void {
    const index = devices.findIndex(device => device.id === id);
    if (index !== -1) {
        devices[index] = { ...devices[index], ...updatedDevice };
    }
}

export function deleteDevice(id: string): void {
    const index = devices.findIndex(device => device.id === id);
    if (index !== -1) {
        devices.splice(index, 1);
    }
}

export function getDevices(): Device[] {
    return devices;
}