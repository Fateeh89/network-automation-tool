// src/models/device.ts

export interface Device {
    id: string;
    name: string;
    type: string;
    osType: string;
    jumpboxConnectionId: string;
    credentialsId: string;
}

export class DeviceModel {
    private devices: Device[] = [];

    addDevice(device: Device): void {
        this.devices.push(device);
    }

    editDevice(id: string, updatedDevice: Device): void {
        const index = this.devices.findIndex(device => device.id === id);
        if (index !== -1) {
            this.devices[index] = { ...this.devices[index], ...updatedDevice };
        }
    }

    deleteDevice(id: string): void {
        this.devices = this.devices.filter(device => device.id !== id);
    }

    getDevices(): Device[] {
        return this.devices;
    }
}