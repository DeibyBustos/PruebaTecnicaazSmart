import DeviceList from '../components/DeviceList';
import NavBar from '../layouts/NavBar';

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1>Lista de Dispositivos GPS</h1>
            <DeviceList />
        </div>
    );
}
