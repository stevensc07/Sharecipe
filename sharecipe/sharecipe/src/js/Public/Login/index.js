import React  from 'react';
import {Link} from 'react-router-dom';


function Login() {


  return (
      <main className="signup">

      <form  noValidate>
        
          
            <h1>
            Inicia sesión en Sharecipe
            </h1>
          
          <h4>Usuario</h4>
            <input type="text"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"              
             // value={email}
             // onChange={e => setEmail(e.target.value)}
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
            //  value={password}
            //  onChange={e => setPassword(e.target.value)}
            />
          
          
            <input  type="submit"
              fullWidth
              variant="contained"
              color="primary"         
             // onClick={handleSubmit}
            />

        
          
            <p>¿Ya tienes cuenta?<Link to="/password">¿Olvidaste tu contraseña?</Link></p>
            <p>¿Eres un Nuevo Chef?<Link to="/signup">Regístrate ahora »</Link></p>

          
        
      </form>
  </main>
  );
}

export default Login;