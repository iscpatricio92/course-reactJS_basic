import { useState, useEffect } from "react";
const useEffectComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  /**
   * Component didUpdate
   * Se llama cada vez que ocurre un evento que actualice el componente
   * */
  useEffect(() => {
    console.log("did update effect");
  });

  /**
   * Component didUpdate
   * Se llama cada vez que se carga, o se crea el componente, por los [] vacios que recibe
   * */
  useEffect(() => {
    console.log("didmount Effect");

    /** Component willUnmount
     * Cuando se tiene un return se llamará cuando el compoment es destruido,
     * ya sea desde algun padre no se ve reflejado al recargar la página
     */
    return () => {
      console.log("willUnmount");
    };
  }, []);

  /**
   * Se llamará solo cuando alguno de los parametros dentro de corchetes sufra alguna modificación
   */
  useEffect(() => {
    console.log("name o age cambia");
  }, [name, age]);

  return (
    <div>
      <input
        value="name"
        onChange={({ target: { value } }) => setName(value)}
      />
      <br />
      <br />
      <input value="age" onChange={({ target: { value } }) => setAge(value)} />
    </div>
  );
};
export default useEffectComponent;
