import React, { useState } from 'react';
import './styles.css';

const Page2 = () => {
  const [providers, setProviders] = useState([]);
  const [provider, setProvider] = useState({ name: '', contact: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProvider({ ...provider, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!provider.name || !provider.contact || !provider.email) return;
    setProviders([...providers, provider]);
    setProvider({ name: '', contact: '', email: '' });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Proveedores</h2>
        <p>Gestión de proveedores de la farmacia.</p>
      </div>

      <div className="form-panel">
        <h3>Agregar Nuevo Proveedor</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre del Proveedor:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={provider.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contacto:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={provider.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={provider.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>

      <div className="providers-panel">
        <h3>Proveedores Actuales</h3>
        <div className="providers-list">
          {providers.map((provider, index) => (
            <div key={index} className="provider-item">
              <p><strong>Nombre:</strong> {provider.name}</p>
              <p><strong>Contacto:</strong> {provider.contact}</p>
              <p><strong>Email:</strong> {provider.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;

