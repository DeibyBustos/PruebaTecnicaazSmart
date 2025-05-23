import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/DeviceForm.css';

const DeviceForm = () => {
  const [formData, setFormData] = useState({
    modelo: '',
    proveedor: '',
    descripcion: '',
    estado: '1'
  });

  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      estado: Number(formData.estado)
    };

    axios.post('http://localhost:8000/api/dispositivos/crear', payload)
      .then(() => {
        alert('Dispositivo creado con éxito');
        setFormData({
          modelo: '',
          proveedor: '',
          descripcion: '',
          estado: '1'
        });
        navigate('/');
      })
      .catch(err => {
        console.error(err);
        alert('Error al crear el dispositivo');
      });
  };

  return (
    <div className="form-wrapper">
      <h2>Registro de Dispositivo</h2>
      <form onSubmit={handleSubmit} className="styled-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="proveedor">Proveedor</label>
            <input
              type="text"
              id="proveedor"
              name="proveedor"
              value={formData.proveedor}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="descripcion">Descripción</label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="1">Disponible</option>
              <option value="0">Agotado</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="submit-button">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default DeviceForm;
