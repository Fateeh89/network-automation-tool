export interface Interface {
    id: string;
    name: string;
    type: string; // e.g., Ethernet, Serial, etc.
    status: 'up' | 'down'; // Interface status
    ipAddress?: string; // Optional IP address
    macAddress?: string; // Optional MAC address
    description?: string; // Optional description
    speed?: number; // Speed in Mbps
    duplex?: 'full' | 'half'; // Duplex mode
}