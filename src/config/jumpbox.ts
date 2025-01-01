export interface JumpboxConnection {
    id: string;
    hostname: string;
    ipAddress: string;
    username: string;
    password: string;
}

const jumpboxConnections: JumpboxConnection[] = [];

export function addJumpboxConnection(connection: JumpboxConnection): void {
    jumpboxConnections.push(connection);
}

export function editJumpboxConnection(id: string, updatedConnection: JumpboxConnection): void {
    const index = jumpboxConnections.findIndex(conn => conn.id === id);
    if (index !== -1) {
        jumpboxConnections[index] = updatedConnection;
    }
}

export function deleteJumpboxConnection(id: string): void {
    const index = jumpboxConnections.findIndex(conn => conn.id === id);
    if (index !== -1) {
        jumpboxConnections.splice(index, 1);
    }
}

export function getJumpboxConnections(): JumpboxConnection[] {
    return jumpboxConnections;
}