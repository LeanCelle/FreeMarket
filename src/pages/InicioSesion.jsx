import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Provider';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

const InicioSesion = () => {
  const { handleSubmit, error, email, password, setEmail, setPassword } = useContext(CartContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);

    // Guardar el nombre de usuario en el localStorage si el inicio de sesión es exitoso
    if (!error) {
      localStorage.setItem('username', email);
    }
  };

  //////////////


  const firebaseConfig = {
    apiKey: "AIzaSyAhS43XT8ml5lp_P2MS6_uTR_E8a6S5OYA",
    authDomain: "freemarket-6cca2.firebaseapp.com",
    projectId: "freemarket-6cca2",
    storageBucket: "freemarket-6cca2.appspot.com",
    messagingSenderId: "768384503854",
    appId: "1:768384503854:web:0b0c418dbbcc38786e0fbf"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  function callLoginGoogle () {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(result.user.displayName)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log("error en login");
  });
  }

  return (
    <form className="form_container" onSubmit={handleFormSubmit}>
      <img
        className="carritoInicioSesion"
        src="https://i.postimg.cc/tRkmMg84/12344375454-removebg-preview.png"
        alt="carrito"
      />
      <div className="title_container">
        <p className="title">Login to your Account</p>
        <span className="subtitle">
          Get started with our app, just create an account and enjoy the experience.
        </span>
      </div>
      <div className="input_container">
        <label className="input_label" htmlFor="email_field">
          Email
        </label>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          {/* ... Contenido del SVG ... */}
        </svg>
        <input
          placeholder="name@email.com"
          title="Input title"
          name="input-name"
          type="text"
          className="input_field"
          id="email_field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input_container">
        <label className="input_label" htmlFor="password_field">
          Password
        </label>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          {/* ... Contenido del SVG ... */}
        </svg>
        <input
          placeholder="Password"
          title="Input title"
          name="input-name"
          type="password"
          className="input_field"
          id="password_field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="error_message">{error && 'Invalid email or password.'}</div>
      <button title="Sign In" type="submit" className="sign-in_btn">
        <span>Iniciar Sesión</span>
      </button>
      <button title="Sign In" type="submit" className="sign-in_ggl" onClick={callLoginGoogle}>
    <svg height="18" width="18" viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" id="A"></path>
      </defs>
      <clipPath id="B">
        
      </clipPath>
      <g transform="matrix(.727273 0 0 .727273 -.954545 -1.45455)">
        <path fill="#fbbc05" clipPath="url(#B)" d="M0 37V11l17 13z"></path>
        <path fill="#ea4335" clipPath="url(#B)" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
        <path fill="#34a853" clipPath="url(#B)" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
        <path fill="#4285f4" clipPath="url(#B)" d="M48 48L17 24l-4-3 35-10z"></path>
      </g>
    </svg>
    <span>Sign In with Google</span>
  </button>
      <Link to="/terminos-y-condiciones">
        <p className="note">Terms of use &amp; Conditions</p>
      </Link>
    </form>
  );
};

export default InicioSesion;




