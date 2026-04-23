import { useEffect, useState } from "react";
import { TarjetaContacto } from "./TarjetaContacto";
import "./Directorio.css";
import { useTitle } from "../../hooks/useTitle";

export const Directorio = () => {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useTitle("Directorio");

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((res) => {
        //En desarrollo, Vite redirige cualquier ruta desconocida a index.html
        // para que funcione el routing de React.
        // Por eso, cuando pedimos un JSON que no existe, no obtenemos un 404 sino un HTML,
        // lo que rompe el parseo a JSON.
        const contentType = res.headers.get("content-type");
        console.log(contentType);

        if (!res.ok || !contentType.includes("application/json")) {
          throw new Error("No se pudo cargar el archivo JSON");
        }
        return res.json();
      })
      .then((data) => setNosotros(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return <p>Cargando equipo...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Nuestro equipo</h2>

      <div className="contenedor-tarjetas">
        {nosotros.map((persona) => (
          <TarjetaContacto key={persona.id} {...persona} />
        ))}
      </div>
    </div>
  );
};
