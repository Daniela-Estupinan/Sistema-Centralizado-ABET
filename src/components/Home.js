import React from 'react';

const Home = () => {
  return (
    <div>
      <style>
        {`
          /* Estilos para el contenedor */
          div {
            text-align: center;
            padding: 20px;
          }

          /* Estilos para el título */
          h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          /* Estilos para los párrafos */
          p {
            font-size: 18px;
            margin-bottom: 15px;
          }
        `}
      </style>

      
      
      <h2>SISTEMA CENTRALIZADO</h2>
      <p>Este es el sistema centralizado con diferentes módulos.</p>
      <p>Selecciona uno de los sistemas del menú para continuar.</p>
      
    </div>
  );
};

export default Home;

