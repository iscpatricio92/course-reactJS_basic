import { useState } from "react";

const ConditionalRender = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogged, setisLogged] = useState(false);

  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleSubmitClick = (event) => {
    setisLogged(true);
  };

  return (
    <div className="App">
      <form>
        <h2>Iniciar sesión</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button onClick={handleSubmitClick} type="submit">
          Enter
        </button>
      </form>
      {islogged && <h2>Loggeado Correctamente</h2>}
    </div>
  );
};
export default ConditionalRender;
