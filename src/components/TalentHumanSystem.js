import React, { useState } from 'react';

const TalentHumanSystem = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' },

  ]);

  const [newUser, setNewUser] = useState({
    name: '',
    position: '',
  });

  const handleCreateUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', position: '' });
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Sistema de Talento Humano</h2>

      <style>
        {`
          /* Estilos para el formulario */
          form {
            display: flex;
            flex-direction: column;
          }

          input {
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
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cargo"
          value={newUser.position}
          onChange={(e) => setNewUser({ ...newUser, position: e.target.value })}
        />
        <button onClick={handleCreateUser}>Crear</button>
      </div>

      {/* Lista de usuarios */}
      <div>
        <h3>Usuarios</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.position}
              <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TalentHumanSystem;
