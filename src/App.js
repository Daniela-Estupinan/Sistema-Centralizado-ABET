import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './components/Home';
import Login from './components/Login';
import TalentHumanSystem from './components/TalentHumanSystem';
import HelpDeskSystem from './components/HelpDeskSystem';
import EmailSystem from './components/EmailSystem';
import DomainServerSystem from './components/DomainServerSystem';
import NextcloudSystem from './components/NextcloudSystem';

const domain = 'dev-plymbofqlzi8dwhv.us.auth0.com'; // Reemplazar con tu dominio de Auth0
const clientId = 'I3jpIIvIclgthqzlHrcnrktUTl32VqDq';

const App = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <div>
        <style>
          {`
            /* Estilos para el contenedor */
            div {
              text-align: center;
              padding: 20px;
            }

            /* Estilos para el nav */
            nav {
              background-color: #4CAF50;
              display: flex;
              justify-content: center;
              padding: 10px;
              margin: 0; /* Eliminar margen */
              
            }

            /* Estilos para la lista */
            #navig {
              list-style-type: none;
              display: flex;
              margin: 0;
              padding: 0;
            }

            /* Estilos para los elementos de la lista */
            #navig li {
              margin: 0 15px;
            }

            /* Estilos para los enlaces */
            #navig li a {
              color: black;
              text-decoration: none;
              padding: 8px 16px;
            }

            /* Estilos para los enlaces al pasar el mouse */
            #navig li a:hover {
              background-color: white;
              color: black;
              border-radius: 5px;
            }
          `}
        </style>

        <nav>
          <ul id='navig'>
            <li>
              <Link to="/">Inicio</Link>
            </li>
         
          </ul>
        </nav>
{/* PATRON DE ENRUTAMIENTO */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/talent-human-system" element={<TalentHumanSystem />} />
          <Route path="/help-desk-system" element={<HelpDeskSystem />} />
          <Route path="/email-system" element={<EmailSystem />} />
          <Route path="/domain-server-system" element={<DomainServerSystem />} />
          <Route path="/nextcloud-system" element={<NextcloudSystem />} />
        </Routes>
      </div>
    </Auth0Provider>
  );
};

export default App;
