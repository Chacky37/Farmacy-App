import React from 'react';
import './styles.css';

const Page4 = () => {
  // Datos simulados de productos
  const products = [
    { id: 1, name: 'Paracetamol', category: 'Medicamento', price: '$5.00' },
    { id: 2, name: 'Shampoo', category: 'Cuidado Personal', price: '$10.00' },
  ];

  // Datos simulados de proveedores
  const providers = [
    { id: 1, name: 'Distribuidora ABC', contact: 'Pedro Pérez', email: 'pedro@example.com' },
    { id: 2, name: 'Proveedor XYZ', contact: 'María González', email: 'maria@example.com' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Reporte</h2>
        <p>Información de productos y proveedores.</p>
      </div>

      <div className="report-panel white-panel">
        <h3>Productos</h3>
        <ul className="panel-list">
          {products.map(product => (
            <li key={product.id}>
              <strong>Nombre:</strong> {product.name}<br />
              <strong>Categoría:</strong> {product.category}<br />
              <strong>Precio:</strong> {product.price}<br />
            </li>
          ))}
        </ul>
      </div>

      <div className="report-panel white-panel">
        <h3>Proveedores</h3>
        <ul className="panel-list">
          {providers.map(provider => (
            <li key={provider.id}>
              <strong>Nombre:</strong> {provider.name}<br />
              <strong>Contacto:</strong> {provider.contact}<br />
              <strong>Email:</strong> {provider.email}<br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page4;
