import React from 'react';
import {Link} from 'react-router-dom';



function Home() {
  return (
    <main className="">
    
        <div className="content">
          <h6>Sigue lo que te interesa.</h6>
          <h6>Entérate de lo que está hablando la gente.</h6>
          <h6>Únete a la conversación.</h6>
        
        </div>
    
    


        <div className="content">
            <h5>Descubre lo que está pasando en el mundo en este momento</h5>
            <p>Únete hoy a Sharecipe.</p>
            
    
    
            <p>¿Ya tienes cuenta?<Link to="/login">¿Inicia sesión?</Link></p>
            <p>¿Eres un Nuevo Chef?<Link to="/signup">Regístrate ahora »</Link></p>
        </div>
    
    </main>
  );
}

export default Home;
