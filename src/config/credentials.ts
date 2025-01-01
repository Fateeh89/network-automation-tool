export interface Credential {
    username: string;
    password: string;
}

const credentials: Credential[] = [];

export function addCredential(username: string, password: string): void {
    credentials.push({ username, password });
}

export function editCredential(index: number, username: string, password: string): void {
    if (index >= 0 && index < credentials.length) {
        credentials[index] = { username, password };
    }
}

export function deleteCredential(index: number): void {
    if (index >= 0 && index < credentials.length) {
        credentials.splice(index, 1);
    }
}

export function getCredentials(): Credential[] {
    return credentials;
}