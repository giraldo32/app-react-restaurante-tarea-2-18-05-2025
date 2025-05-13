import React, { useState } from 'react';
import Swal from 'sweetalert2';
// Si usas React Router, descomenta la siguiente línea:
// import { Link } from 'react-router-dom';

export default function NewRestaurant() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [direccion, setDireccion] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoRestaurante = {
      nombre,
      descripcion,
      direccion,
      imagen
    };

    // Guardar en localStorage
    const restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];
    restaurantes.push(nuevoRestaurante);
    localStorage.setItem('restaurantes ', JSON.stringify(restaurantes ));

    Swal.fire("Restaurante creado correctamente", "", "success");

    // Limpiar formulario
    setNombre('');
    setDescripcion('');
    setDireccion('');
    setImagen('');
  };

  return (
    <div className="container mt-4">
      {/* Botones de navegación */}
      <div className="mb-3">
        {/* Si usas React Router, usa <Link> en vez de <button> */}
        {/* 
        <Link to="/" className="btn btn-primary me-2">Inicio</Link>
        <Link to="/buscar" className="btn btn-secondary me-2">Buscar</Link>
        <Link to="/nuevo" className="btn btn-success">Nuevo Restaurante</Link>
        */}
        <button className="btn btn-primary me-2">Inicio</button>
        <button className="btn btn-secondary me-2">Buscar</button>
        <button className="btn btn-success">Nuevo Restaurante</button>
      </div>
      <h2>Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Nombre"
          required
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Descripción"
          required
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Dirección"
          required
          value={direccion}
          onChange={e => setDireccion(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="url"
          placeholder="URL Imagen"
          required
          value={imagen}
          onChange={e => setImagen(e.target.value)}
        />
        <button className="btn btn-success" type="submit">Guardar</button>
      </form>
    </div>
  );
}