import { useState } from "react";
import restaurantsData from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

export default function Search() {
  const [search, setSearch] = useState("");

  const filtered = restaurantsData.filter(r =>
    r.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Buscar Restaurantes</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filtered.map(rest => (
          <RestaurantCard key={rest.id} {...rest} />
        ))}
      </div>
    </div>
  );
}