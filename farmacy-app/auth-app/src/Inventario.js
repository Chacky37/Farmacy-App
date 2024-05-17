import React, { useState } from 'react';
import './styles.css';

const Page1 = () => {
  const [inventory, setInventory] = useState([]);
  const [item, setItem] = useState({ name: '', quantity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' && /\d/.test(value)) return; // Verificar si el nombre contiene números
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.name || !item.quantity || isNaN(item.quantity)) return; // Verificar si la cantidad es un número
    setInventory([...inventory, item]);
    setItem({ name: '', quantity: '' });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Inventario</h2>
        <p>Gestión integral del inventario de medicamentos y productos de la farmacia.</p>
      </div>

      <div className="form-panel">
        <h3>Agregar Nuevo Producto</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre del Producto:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={item.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={item.quantity}
              onChange={handleInputChange}
              min="1" // Establece el valor mínimo permitido
            />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>

      <div className="inventory-panel">
        <h3>Inventario Actual</h3>
        <div className="inventory-grid">
          {inventory.map((item, index) => (
            <div key={index} className="inventory-item">
              <p><strong>Producto:</strong> {item.name}</p>
              <p><strong>Cantidad:</strong> {item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1;
