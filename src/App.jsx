import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Jean Oppossum");
  const [mail, setMail] = useState("jeanoppossum@lereacteur.io");
  const [password, setPassword] = useState("Hop0sum!2024");
  const [checkPass, setCheckPass] = useState("Hop0sum!2024");
  {
    /**-----------------------------------Ma fonction changeField---------------------------------------/ */
  }
  const changeField = (setKey, event) => {
    {
      setKey(event.target.value);
    }
    return setKey;
  };

  return (
    <>
      {/**-----------------------------------Formulaire---------------------------------------/ */}
      <form>
        {/**-----------------------------------Nom---------------------------------------/ */}
        <label for="name">Name</label>
        <input
          type="texte"
          name="name"
          value={name}
          onChange={changeField(setName, event)}
        />
        {/**-----------------------------------Mail---------------------------------------/ */}
        <label for="mail">Email</label>
        <input type="email" name="mail" value={mail} />
        {/**-----------------------------------Password---------------------------------------/ */}
        <label for="password">Password</label>
        <input type="password" name="password" value={password} />
        {/**-----------------------------------Checkpassword---------------------------------------/ */}
        <label for="checkPass">Confirm your password</label>
        <input type="password" name="checkPass" value={checkPass} />
        {/**-----------------------------------Formulaire---------------------------------------/ */}
      </form>
      <button>Register</button>

      {/**-----------------------------------------------------------------------------------/ */}
    </>
  );
}

export default App;
