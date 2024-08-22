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
   {stepTwo===false?       {/**-----------------------------------Formulaire---------------------------------------/ */}
      <form>
        {/**-----------------------------------Nom---------------------------------------/ */}
        <label htmlFor="name">Name</label>
        <input
          type="texte"
          name="name"
          value={name}
          onChange={(event) => changeField(setName, event)}
        />
        {/**-----------------------------------Mail---------------------------------------/ */}
        <label htmlFor="mail">Email</label>
        <input
          type="email"
          name="mail"
          value={mail}
          onChange={(event) => changeField(setMail, event)}
        />
        {/**-----------------------------------Password---------------------------------------/ */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => changeField(setPassword, event)}
        />
        {/**-----------------------------------Checkpassword---------------------------------------/ */}
        <label htmlFor="checkPass">Confirm your password</label>
        <input
          type="password"
          name="checkPass"
          value={checkPass}
          onChange={(event) => changeField(setCheckPass, event)}
        />
        {/**-----------------------------------Formulaire---------------------------------------/ */}
      </form>
      <button
        onclick={() => {
          if (checkPass === password) {
            {
              /* charger le formulaire Results */
            }
          } else {
            {
              /* message d'erreur : les mots de passe ne sont pas identiques */
            }
          }
        }}
      >
        Register
      </button>    : "Salut"      }
    
 

      {/**-----------------------------------------------------------------------------------/ */}
    </>
  );
}

export default App;
