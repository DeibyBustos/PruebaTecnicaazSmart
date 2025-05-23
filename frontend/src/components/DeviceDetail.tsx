import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { DeviceContext } from '../context/DeviceContext';
import '../styles/DeviceDetail.css'; 

export default function DeviceDetail() {
  const { id } = useParams<{ id: string }>();
  const { devices } = useContext(DeviceContext);

  const device = devices.find(d => d.id === Number(id));
  if (!device) return <p>Dispositivo no encontrado</p>;

  return (
    <div className="detail-container">
      <div className="device-card">
        <Link to="/" className="back-link">Volver a la lista</Link>
        <h2>Dispositivo {device.id}</h2>
        <p><strong>Modelo:</strong> {device.modelo}</p>
        <p><strong>Proveedor:</strong> {device.proveedor}</p>
        <p><strong>Descripción:</strong> {device.descripcion}</p>
        <p><strong>Estado:</strong> {device.estado === 1 ? 'Disponible' : 'Agotado'}</p>
      </div>
    </div>
  );
}
