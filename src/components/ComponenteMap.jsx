export const ComponenteMap = () => {
  const datos = ["Gaston", "Sofia", "Adrian", "Julieta"];
  //   const datos = [];

  return (
    <ul>
      {datos.length ? (
        datos.map((nombre, index) => <li key={index}>{nombre}</li>)
      ) : (
        <li>No hay nombres</li>
      )}
    </ul>
  );
};

export const ComponenteMapEarlyReturn = () => {
  //const datos = ["Gaston", "Sofia", "Adrian", "Julieta"];
  const datos = [];

  if (!datos.length) {
    return <p>No hay nombres</p>;
  }

  return (
    <ul>
      {datos.map((nombre, index) => {
        return <li key={index}>{nombre}</li>;
      })}
    </ul>
  );
};
