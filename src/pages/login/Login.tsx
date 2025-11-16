import { useState } from "react";
import Home from "../home/Home";


function Login() {

  const [islogged, setIsLogged] = useState(false);
  
  return (
    <>
      {
        islogged ? (
          <Home
          titulo="Componente Home"
          texto="Bem-vind de volta!"
          />
        ) : (
          <div>
            <h2>Componente Login</h2>
            <button onClick={() => setIsLogged(true)}>Entrar</button>
          </div>
        )
      }
    
    </>
  )
}

export default Login