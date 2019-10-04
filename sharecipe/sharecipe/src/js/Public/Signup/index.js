import React from 'react';
import {Link} from 'react-router-dom';



function SignUp() {
  return (
      <main className="signup">

      <form  noValidate>
        
          
            <h1>
              Crea tu cuenta
            </h1>
          
            <h4>Nombre y Apellido</h4>
            <input type="text"
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Nombre"
              autoFocus
            />
          
            <h4>Nombre de Usuario</h4>
            <input type="text"
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Apellido"
              name="lastName"
              autoComplete="lname"
            />
          
            <h4>Correo Electronico</h4>
            <input type="text"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
            />
          
            <h4>Contraseña</h4>
            <input //type="text"
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
            />
          
            <h4>Cofirmar Contraseña</h4>
            <input //type="text"
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              id="confirmPassword"
            />
          
        <div>  
        <input  type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="button"
        
         
        />
        </div>
         
            <p>¿Ya tienes cuenta?<Link to="/login">¿Inicia sesión?</Link></p>
          
        
      </form>
  </main>
  );
}

export default SignUp;
