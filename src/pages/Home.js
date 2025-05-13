import React, { useState } from "react";
import restaurantsData from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  const [restaurants, setRestaurants] = useState(
    restaurantsData.map(r => ({ ...r, id: Date.now() + Math.random() }))
  );
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [newRest, setNewRest] = useState({
    name: "",
    description: "",
    address: "",
    image: ""
  });

  const handleInput = e => {
    setNewRest({ ...newRest, [e.target.name]: e.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    setRestaurants([
      ...restaurants,
      { ...newRest, id: Date.now() + Math.random() }
    ]);
    setNewRest({ name: "", description: "", address: "", image: "" });
    setShowForm(false);
  };

  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="mb-3 d-flex gap-2">
        <button className="btn btn-primary" onClick={() => window.location.href = "/"}>Inicio</button>
        <input
          type="text"
          placeholder="Buscar restaurante..."
          className="form-control w-auto"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-success" onClick={() => setShowForm(true)}>Nuevo Restaurante</button>
      </div>

      {showForm && (
        <form className="mb-4" onSubmit={handleAdd}>
          <input
            name="name"
            placeholder="Nombre"
            className="form-control mb-2"
            value={newRest.name}
            onChange={handleInput}
            required
          />
          <input
            name="description"
            placeholder="Descripción"
            className="form-control mb-2"
            value={newRest.description}
            onChange={handleInput}
            required
          />
          <input
            name="address"
            placeholder="Dirección"
            className="form-control mb-2"
            value={newRest.address}
            onChange={handleInput}
            required
          />
          <input
            name="image"
            placeholder="URL de la imagen"
            className="form-control mb-2"
            value={newRest.image}
            onChange={handleInput}
            required
          />
          <button className="btn btn-primary" type="submit">Guardar</button>
          <button className="btn btn-secondary ms-2" type="button" onClick={() => setShowForm(false)}>Cancelar</button>
        </form>
      )}

      <h2>Listado de Restaurantes</h2>
      <div className="row">
        {filtered.map(rest => (
          <div className="col-md-4 mb-3" key={rest.id}>
            <RestaurantCard {...rest} />
          </div>
        ))}
      </div>
    </div>
  );
}