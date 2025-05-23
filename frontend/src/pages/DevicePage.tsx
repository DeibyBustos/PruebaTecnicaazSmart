import DeviceDetail from '../components/DeviceDetail';
import NavBar from '../layouts/NavBar';

export default function DevicePage() {
    return (
        <div>
            <NavBar />
            <h1>Detalle del Dispositivo</h1>
            <DeviceDetail />
        </div>
    );
}
