import React from 'react';
import {Link} from 'react-router-dom';



function Password() {
  return (

      <main className="passwordRecovery">

      <form  noValidate>
        
          
            <h1>
              Recupera tu contraseña
            </h1>
          
          
            <input type="text"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
            />
          
          
        <input  type="submit"
          fullWidth
          variant="contained"
          color="primary"
        
          
        />
        
          
            <p>¿Ya tienes cuenta?<Link to="/login">¿Inicia sesión?</Link></p>
            <p>¿Eres un Nuevo Chef?<Link to="/signup">Regístrate ahora »</Link></p>
          
        
      </form>
      </main>
  );
}

export default Password;
