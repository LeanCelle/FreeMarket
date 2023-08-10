import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { db } from '../services/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

const SignUp = () => {

  const [formData, setFormData] = useState({ nombre: '', apellido: '', telefono: '', pais: '', ciudad: '', direccion: '', codigoPostal: '', email: '', contraseña: '', confirmarContraseña: ''});

  const [errors, setErrors] = useState({ email: '', contraseña: '', confirmarContraseña: ''});

  const ValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const ValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = ValidEmail(formData.email) ? '' : 'Por favor, ingrese un correo electrónico válido.';
    const contraseñaError = ValidPassword(formData.contraseña) ? '' : 'La contraseña debe tener al menos 6 caracteres, entre ellos al menos una letra y un número.';
    const confirmarContraseñaError = formData.contraseña === formData.confirmarContraseña ? '' : 'Las contraseñas no coinciden. Por favor, verifique.';

    if (emailError || contraseñaError || confirmarContraseñaError) {
      setErrors({
        email: emailError,
        contraseña: contraseñaError,
        confirmarContraseña: confirmarContraseñaError,
      });
      return;
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { nombre, apellido, telefono, pais, ciudad, direccion, codigoPostal, email, contraseña, confirmarContraseña} = formData;

  // Mail existente

  const [emailExists, setEmailExists] = useState(false);

  useEffect(() => {

    // Verifico si el correo ya existe en la base de datos
    const checkEmailExists = async () => {
    const personas = collection(db, 'users');
    const q = query(personas, where('email', '==', formData.email));
    const querySnapshot = await getDocs(q);
    setEmailExists(!querySnapshot.empty);
  };

    checkEmailExists();
  }, [formData.email]);
  
  const Registrarse = async () => {
  const MySwal = withReactContent(Swal);
  const date = new Date();
  
  const datos = {
    name: nombre,
    lastname: apellido,
    number: telefono,
    country: pais,
    direction: direccion,
    zipCode: codigoPostal,
    email: email,
    password: contraseña,
    date,
  };
  
  try {
    const personas = collection(db, 'users');
    await addDoc(personas, datos);
    
    setTimeout (() => {
      localStorage.setItem('username', email);
      window.location.reload();
      window.location.href = '/';
    }, 2000);
  
    } catch (error) {
      MySwal.fire({
        title: 'Error al registrarse',
        text: 'Hubo un problema al cargar sus datos. Por favor, inténtelo nuevamente.',
        icon: 'error',
      });
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pais">País</label>
          <input type="text" id="pais" name="pais" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" id="ciudad" name="ciudad" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal</label>
          <input type="text" id="codigoPostal" name="codigoPostal" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
          <div className="error-message">{errors.email}</div>
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" name="contraseña" onChange={handleChange} required />
          <div className="error-message">{errors.contraseña}</div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
          <input type="password" id="confirmarContraseña" name="confirmarContraseña" onChange={handleChange} required />
          <div className="error-message">{errors.confirmarContraseña}</div>
        </div>

        {ValidEmail(email) && ValidPassword(contraseña) && contraseña === confirmarContraseña && !emailExists && nombre !== '' && apellido !== '' && telefono !== '' && pais !== '' && ciudad !== '' && direccion !== '' && codigoPostal !== '' ? (
          <button type="submit" className="submit-button" onClick={Registrarse}>
            Registrarse
          </button>
      ) : (
        <button type="submit" className="botonTwo">
          {emailExists ? 'El correo ya existe' : 'Completa todos los campos y verifica los datos'}
        </button>
      )}
      </form>
    </div>
  );
};

export default SignUp;





