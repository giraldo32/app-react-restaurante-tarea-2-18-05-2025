export default function RestaurantCard({ nombre, descripcion, direccion, imagen }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text"><small>{direccion}</small></p>
        </div>
      </div>
    </div>
  );
}