import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">RestaurantsApp</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/buscar">Buscar</Link>
        <Link className="nav-link" to="/nuevo">Nuevo Restaurante</Link>
      </div>
    </nav>
  );
}