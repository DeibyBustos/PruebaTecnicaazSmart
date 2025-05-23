import { useContext, useEffect } from 'react';
import { DeviceContext } from '../context/DeviceContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/DeviceList.css'; 

export default function DeviceList() {
  const { devices, setDevices } = useContext(DeviceContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/dispositivos/listado')
      .then(res => setDevices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="table-container">
      <table className="device-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Proveedor</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr
              key={device.id}
              onClick={() => navigate(`/device/${device.id}`)}
              className="clickable-row"
            >
              <td>{device.id}</td>
              <td>{device.modelo}</td>
              <td>{device.proveedor}</td>
              <td>{device.estado === 1 ? 'Disponible' : 'Agotado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
