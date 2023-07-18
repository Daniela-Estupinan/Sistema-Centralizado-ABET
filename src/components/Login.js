import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const handleLogin = () => {
    // Iniciar el proceso de inicio de sesión con Auth0
    loginWithRedirect();
  };

  return (
    <div>
      <style>
        {`
          /* Estilos para el contenedor */
          div {
            text-align: center;
            padding: 20px;
          }

          /* Estilos para el botón */
          button {
            padding: 10px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            background-color: #45a049;
          }

          /* Estilos para el mensaje de inicio de sesión */
          p {
            font-size: 18px;
            font-weight: bold;
          }
        `}
      </style>

      <h2>Iniciar Sesión</h2>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {isAuthenticated ? (
            <p>¡Ya has iniciado sesión!</p>
          ) : (
            <button onClick={handleLogin}>Iniciar Sesión con Auth0</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
