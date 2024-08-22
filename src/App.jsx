import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Jean Oppossum");
  const [mail, setMail] = useState("jeanoppossum@lereacteur.io");
  const [password, setPassword] = useState("Hop0sum!2024");
  const [checkPass, setCheckPass] = useState("Hop0sum!2024");
  const [stepTwo, setStepTwo] = useState(false);
  {
    /**-----------------------------------Ma fonction changeField---------------------------------------/ */
  }
  const changeField = (setKey, event) => {
    {
      setKey(event.target.value);
      event.preventDefault();
    }
  };

  return (
    <>
      {stepTwo === false ? (
        <>
          {" "}
          {/**-----------------------------------Formulaire---------------------------------------/ */}
          <form>
            {/**-----------------------------------Nom---------------------------------------/ */}
            <label htmlFor="name">Name</label>
            <input
              type="texte"
              name="name"
              onChange={(event) => changeField(setName, event)}
              value={name}
            />
            {/**-----------------------------------Mail---------------------------------------/ */}
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              name="mail"
              onChange={(event) => changeField(setMail, event)}
              value={mail}
            />
            {/**-----------------------------------Password---------------------------------------/ */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(event) => changeField(setPassword, event)}
              value={password}
            />
            {/**-----------------------------------Checkpassword---------------------------------------/ */}
            <label htmlFor="checkPass">Confirm your password</label>
            <input
              type="password"
              name="checkPass"
              onChange={(event) => changeField(setCheckPass, event)}
              value={checkPass}
            />
            {/**-----------------------------------Formulaire---------------------------------------/ */}
          </form>
          <button
            onClick={() => {
              if (checkPass === password) {
                {
                  setStepTwo(true);
                }
              } else {
                {
                  /* message d'erreur : les mots de passe ne sont pas identiques */
                }
              }
            }}
          >
            Register
          </button>
          {/**-----------------------------------------------------------------------------------/ */}
        </>
      ) : (
        "salut"
      )}
    </>
  );
}

export default App;
