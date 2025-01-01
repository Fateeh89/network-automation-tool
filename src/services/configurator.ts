import { SSHClient } from './ssh';
import { renderTemplate } from '../utils/templateRenderer';
import { JumpboxConfig } from '../config/jumpbox';
import { DeviceConfig } from '../config/devices';
import { CredentialConfig } from '../config/credentials';

export class Configurator {
    private sshClient: SSHClient;

    constructor(jumpboxConfig: JumpboxConfig, deviceConfig: DeviceConfig, credentialConfig: CredentialConfig) {
        this.sshClient = new SSHClient(jumpboxConfig, credentialConfig);
    }

    async configureDevice(device: DeviceConfig, template: string): Promise<void> {
        const configCommands = renderTemplate(template, device);
        await this.sshClient.connect(device);
        await this.sshClient.executeCommands(configCommands);
        await this.sshClient.disconnect();
    }

    async saveConfiguration(device: DeviceConfig): Promise<void> {
        const saveCommand = 'write memory'; // Example command for saving configuration
        await this.sshClient.connect(device);
        await this.sshClient.executeCommand(saveCommand);
        await this.sshClient.disconnect();
    }
}