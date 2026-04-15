export const ComponenteHijo = ({ nombre, apellido, edad, estadoCivil }) => {
  return (
    <article>
      <p>{nombre}</p>
      <p>{apellido}</p>
      <p>{edad}</p>
      <p>{estadoCivil}</p>
    </article>
  );
};
