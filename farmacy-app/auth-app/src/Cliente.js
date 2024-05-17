import React, { useState } from 'react';
import './styles.css';

const Page3 = () => {
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({ name: '', phone: '', email: '', address: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client.name || !client.phone || !client.email || !client.address) return;
    if (!isValidPhone(client.phone)) return;
    if (!isValidEmail(client.email)) return;
    setClients([...clients, client]);
    setClient({ name: '', phone: '', email: '', address: '' });
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Clientes</h2>
        <p>Gestión de clientes de la farmacia.</p>
      </div>

      <div className="form-panel">
        <h3>Agregar Nuevo Cliente</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre del Cliente:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={client.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={client.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={client.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección de Vivienda:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={client.address}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>

      <div className="clients-panel">
        <h3>Clientes Actuales</h3>
        <div className="clients-list">
          {clients.map((client, index) => (
            <div key={index} className="client-item">
              <p><strong>Nombre:</strong> {client.name}</p>
              <p><strong>Teléfono:</strong> {client.phone}</p>
              <p><strong>Correo Electrónico:</strong> {client.email}</p>
              <p><strong>Dirección de Vivienda:</strong> {client.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;

