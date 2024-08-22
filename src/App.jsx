import { useState } from "react";
import "./App.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [stepTwo, setStepTwo] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [checkPasswordType, setCheckPasswordType] = useState("password");

  /**-----------------------------------Ma fonction changeField---------------------------------------/ */
  const changeField = (setKey, event) => {
    {
      setKey(event.target.value);
      event.preventDefault();
    }
  };
  /**-------------------------------------------------------------------------------------------------/ */
  return (
    <>
      {stepTwo === false ? (
        <>
          <h1>Create account</h1>{" "}
          {/**-----------------------------------Formulaire---------------------------------------/ */}
          <form>
            {/**-----------------------------------Nom---------------------------------------/ */}
            <label htmlFor="name">Name</label>
            <input
              type="texte"
              id="name"
              placeholder="Jean Oppossum"
              onChange={(event) => changeField(setName, event)}
              value={name}
            />
            {/**-----------------------------------Mail---------------------------------------/ */}
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              placeholder="jeanoppossum@lereacteur.io"
              onChange={(event) => changeField(setMail, event)}
              value={mail}
            />
            {/**-----------------------------------Password---------------------------------------/ */}
            <label className="relative" htmlFor="password">
              Password
              <input
                type={passwordType}
                id="password"
                placeholder="Hop0Seum!2014"
                onChange={(event) => changeField(setPassword, event)}
                value={password}
              />
              <div className="passIcon">
                {passwordType === "password" ? (
                  <button
                    type="button"
                    onClick={() => {
                      setPasswordType("texte");
                    }}
                  >
                    <FaEye />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setPasswordType("password");
                    }}
                  >
                    <FaEyeSlash />
                  </button>
                )}
              </div>
            </label>
            {/**-----------------------------------Checkpassword---------------------------------------/ */}
            <label htmlFor="checkPass">Confirm your password</label>
            <input
              type={checkPasswordType}
              id="checkPass"
              placeholder="Hop0Seum!2014"
              onChange={(event) => changeField(setCheckPass, event)}
              value={checkPass}
            />
            <div className="passIcon">
              {checkPasswordType === "password" ? (
                <button
                  type="button"
                  onClick={() => {
                    setCheckPasswordType("texte");
                  }}
                >
                  <FaEye />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setCheckPasswordType("password");
                  }}
                >
                  <FaEyeSlash />
                </button>
              )}
            </div>
            {/**-----------------------------------Formulaire---------------------------------------/ */}
          </form>
          <button
            onClick={(event) => {
              event.preventDefault();
              setEmptyMessage(false);
              setLengthError(false);
              setErrorMessage(false);

              if (!password || !name || !mail) {
                setEmptyMessage(true);
              } else if (password.length < 10) {
                setLengthError(true);
              } else {
                if (checkPass === password) {
                  setStepTwo(true);
                } else {
                  setErrorMessage(true);
                }
              }
            }}
          >
            Register
          </button>
          {errorMessage && <p>Les mots de passe ne sont pas identiques</p>}
          {lengthError && (
            <p>Veuillez indiquer un mot de passe d'au moins 10 caractères</p>
          )}
          {emptyMessage && <p>Veuillez compléter tous les champs</p>}
          {/**-----------------------------------------------------------------------------------/ */}
        </>
      ) : (
        <>
          <title>Results</title>
          <section className="summary">
            <p>Name : {name}</p>
            <p>Email: {mail}</p>
            <p>Password: {password}</p>
          </section>
          <button
            onClick={() => {
              setStepTwo(false);
            }}
          >
            Edit your informations
          </button>
        </>
      )}
    </>
  );
}

export default App;
