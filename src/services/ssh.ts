import { Client } from 'ssh2';

export class SSHService {
    private client: Client;

    constructor() {
        this.client = new Client();
    }

    connect(host: string, username: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.on('ready', () => {
                resolve();
            }).connect({
                host,
                username,
                password
            });
        });
    }

    executeCommand(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.client.exec(command, (err, stream) => {
                if (err) {
                    return reject(err);
                }
                let data = '';
                stream.on('close', (code: number) => {
                    this.client.end();
                    resolve(data);
                }).on('data', (chunk: string) => {
                    data += chunk;
                }).stderr.on('data', (chunk: string) => {
                    reject(chunk);
                });
            });
        });
    }

    disconnect(): void {
        this.client.end();
    }
}