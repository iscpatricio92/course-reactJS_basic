import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`submit,${email}, ${password}`);
  };
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
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
        <button typeof="submit">Enter</button>
      </form>
    </div>
  );
}

export default App;
