import React, { useState } from "react";
import restaurantsData from "./data/restaurants";

function App() {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [view, setView] = useState("inicio");
  const [search, setSearch] = useState("");
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    address: "",
    image: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Filtrar restaurantes por búsqueda
  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  // Manejar cambios en el formulario de nuevo restaurante
  const handleChange = e => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  // Guardar nuevo restaurante
  const handleSubmit = e => {
    e.preventDefault();
    setRestaurants([...restaurants, newRestaurant]);
    setNewRestaurant({ name: "", description: "", address: "", image: "" });
    setView("inicio");
    setSuccessMessage("Restaurante guardado con éxito");
    setTimeout(() => setSuccessMessage(""), 2500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#23272f", padding: "32px", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
        <button
          style={{ background: "#d32f2f", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer" }}
          onClick={() => { setView("inicio"); setSearch(""); }}
        >
          Inicio
        </button>
        <button
          style={{ background: "#d32f2f", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer" }}
          onClick={() => setView("buscar")}
        >
          Buscar
        </button>
        <button
          style={{ background: "#d32f2f", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer" }}
          onClick={() => setView("nuevo")}
        >
          Nuevo Restaurante
        </button>
      </nav>

      {successMessage && (
        <div style={{
          background: "#43a047",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: "8px",
          textAlign: "center",
          marginBottom: "24px",
          fontWeight: "bold",
          fontSize: "18px"
        }}>
          {successMessage}
        </div>
      )}

      {view === "buscar" && (
        <div style={{ marginBottom: "24px" }}>
          <input
            type="text"
            placeholder="Buscar restaurante por nombre..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #bbb", width: "300px" }}
          />
        </div>
      )}

      {view === "nuevo" && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "32px",
            maxWidth: "400px"
          }}
        >
          <h2 style={{ color: "#d32f2f" }}>Agregar Restaurante</h2>
          <div style={{ marginBottom: "16px" }}>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={newRestaurant.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label>Descripción:</label>
            <input
              type="text"
              name="description"
              value={newRestaurant.description}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label>Dirección:</label>
            <input
              type="text"
              name="address"
              value={newRestaurant.address}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label>Imagen (URL):</label>
            <input
              type="text"
              name="image"
              value={newRestaurant.image}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <button
            type="submit"
            style={{ background: "#d32f2f", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={() => setView("inicio")}
            style={{ marginLeft: "10px", background: "#888", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}
          >
            Cancelar
          </button>
        </form>
      )}

      <h2 style={{ color: "#d32f2f", marginBottom: "24px", textAlign: "center" }}>Restaurantes la avenida</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
        {(view === "buscar" ? filteredRestaurants : restaurants).map((r, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(50, 56, 51, 0.9)",
              width: "320px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img
              src={r.image}
              alt={r.name}
              style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "16px" }}
            />
            <h3 style={{ color: "#000", margin: "8px 0" }}>{r.name}</h3>
            <p style={{ color: "#000", margin: "8px 0" }}>{r.description}</p>
            <p style={{ color: "#000", fontSize: "15px", margin: "8px 0" }}>{r.address}</p>
          </div>
        ))}
      </div>
      <h2 style={{ color: "#d32f2f", marginTop: "32px", textAlign: "center" }}>Restaurantes </h2>
    </div>
  );
}

export default App;