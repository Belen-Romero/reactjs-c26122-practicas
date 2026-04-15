import { ComponenteHijo } from "./ComponenteHijo";

export const ComponentePadre = ({ titulo }) => {
  const persona = {
    nombre: "cosme",
    apellido: "fulanito",
    edad: 25,
    estadoCivil: "soltero",
  };

  return (
    <>
      <h1>{titulo}</h1>
      <ComponenteHijo {...persona} />
    </>
  );
};
