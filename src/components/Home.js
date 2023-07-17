import React from 'react';
import { Link } from 'react-router-dom';

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

      <nav>
        <ul id='navig'>
          
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/talent-human-system">Sistema de Talento Humano</Link>
          </li>
          <li>
            <Link to="/help-desk-system">Sistema de Mesa de Ayuda</Link>
          </li>
          <li>
            <Link to="/email-system">Sistema de Correo Electrónico</Link>
          </li>
          <li>
            <Link to="/domain-server-system">Sistema de Servidor de Dominio</Link>
          </li>
          <li>
            <Link to="/nextcloud-system">Sistema de Almacenamiento en Línea</Link>
          </li>
        </ul>
      </nav>

      <h2>SISTEMA CENTRALIZADO</h2>
      <p>Este es el sistema centralizado con diferentes módulos.</p>
      <p>Selecciona uno de los sistemas del menú para continuar.</p>
    </div>
  );
};

export default Home;

