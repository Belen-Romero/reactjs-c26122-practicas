import { useState } from "react";
import { ListaProductos } from "./ListaProductos";

export const ContenedorProductos = () => {
  const productosArray = [
    { id: 1, nombre: "Notebook", descripcion: "descripcion 1", precio: 123456 },
    { id: 2, nombre: "Mouse", descripcion: "descripcion 2", precio: 1654 },
    { id: 3, nombre: "Teclado", descripcion: "descripcion 3", precio: 4221 },
  ];

  const [productos, setProductos] = useState(productosArray);

  return <ListaProductos productos={productos} />;
};
