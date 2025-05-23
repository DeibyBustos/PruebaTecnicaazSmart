import {createContext, useState} from "react";
import type { ReactNode } from "react";

export interface Device{
    id: number;
    modelo: string;
    proveedor: string;
    descripcion: string;
    estado: number;
}

interface DeviceContextType {
    devices: Device[];
    setDevices: (devices: Device[]) => void;
}

export const DeviceContext = createContext<DeviceContextType>({
    devices: [],
    setDevices: () => {}
});

export const DeviceProvider = ({children}: {children: ReactNode}) => {
    const [devices, setDevices] = useState<Device[]>([]);

    return (
        <DeviceContext.Provider value={{devices, setDevices}}>
            {children}
        </DeviceContext.Provider>
    );
}   


