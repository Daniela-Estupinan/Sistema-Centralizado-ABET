import React, { useState } from 'react';

const EmailSystem = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'john.doe@example.com',
      subject: 'Hola',
      body: '¡Hola! ¿Cómo estás?',
    },
    {
      id: 2,
      sender: 'jane.smith@example.com',
      subject: 'Reunión',
      body: 'Tenemos una reunión a las 3 PM',
    },
  ]);

  const [newEmail, setNewEmail] = useState({
    sender: '',
    subject: '',
    body: '',
  });

  const handleCreateEmail = () => {
    setEmails([...emails, { ...newEmail, id: emails.length + 1 }]);
    setNewEmail({ sender: '', subject: '', body: '' });
  };

  const handleEditEmail = (id, updatedEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === id ? { ...email, ...updatedEmail } : email
    );
    setEmails(updatedEmails);
  };

  const handleDeleteEmail = (id) => {
    const updatedEmails = emails.filter((email) => email.id !== id);
    setEmails(updatedEmails);
  };

  return (
    <div>
      <h2>Sistema de Correo Electrónico</h2>

      <style>
        {`
          /* Estilos para el formulario */
          form {
            display: flex;
            flex-direction: column;
          }

          input, textarea {
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          textarea {
            resize: vertical;
            min-height: 100px;
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

          /* Estilos para la lista de correos */
          ul {
            list-style: none;
            padding: 0;
          }

          li {
            background-color: #fff;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }

          li strong {
            font-weight: bold;
          }

          li p {
            margin: 10px 0;
          }

          li button {
            padding: 5px 10px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 5px;
          }

          li button:hover {
            background-color: #d32f2f;
          }
        `}
      </style>

      {/* Formulario para crear/editar un nuevo correo */}
      <div>
        <h3>Crear/Editar Correo</h3>
        <form>
          <input
            type="text"
            placeholder="Remitente"
            value={newEmail.sender}
            onChange={(e) => setNewEmail({ ...newEmail, sender: e.target.value })}
          />
          <input
            type="text"
            placeholder="Asunto"
            value={newEmail.subject}
            onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
          />
          <textarea
            placeholder="Cuerpo del correo"
            value={newEmail.body}
            onChange={(e) => setNewEmail({ ...newEmail, body: e.target.value })}
          />
          <button onClick={handleCreateEmail}>Guardar</button>
        </form>
      </div>

      {/* Lista de correos */}
      <div>
        <h3>Correos</h3>
        <ul>
          {emails.map((email) => (
            <li key={email.id}>
              <strong>De:</strong> {email.sender}
              <br />
              <strong>Asunto:</strong> {email.subject}
              <br />
              <p>{email.body}</p>
              <button onClick={() => handleEditEmail(email.id, { sender: 'edited@example.com' })}>Editar</button>
              <button onClick={() => handleDeleteEmail(email.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailSystem;
