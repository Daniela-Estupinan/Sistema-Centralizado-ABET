import React, { useState } from 'react';

const DomainServerSystem = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'john.doe', role: 'user' },
    { id: 2, username: 'jane.smith', role: 'admin' },
  ]);

  const [newUser, setNewUser] = useState({
    username: '',
    role: 'user',
  });

  const handleCreateUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ username: '', role: 'user' });
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Sistema de Servidor de Dominio</h2>

      <style>
        {`
          /* Estilos para el formulario */
          form {
            display: flex;
            flex-direction: column;
          }

          input, select {
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          button {
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }

          /* Estilos para la lista de usuarios */
          ul {
            list-style: none;
            padding: 0;
          }

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }

          li button {
            padding: 5px 10px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          li button:hover {
            background-color: #d32f2f;
          }
        `}
      </style>

      {/* Formulario para crear un nuevo usuario */}
      <div>
        <h3>Crear Usuario</h3>
        <form>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
          </form>
          <button onClick={handleCreateUser}>Crear</button>
        
      </div>

      {/* Lista de usuarios */}
      <div>
        <h3>Usuarios</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - Rol: {user.role}
              <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DomainServerSystem;
