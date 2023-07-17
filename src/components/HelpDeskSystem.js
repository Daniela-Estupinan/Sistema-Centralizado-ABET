import React, { useState } from 'react';

const HelpDeskSystem = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Problema con la impresora',
      description: 'La impresora no imprime correctamente',
      assignee: 'John Doe',
    },
    {
      id: 2,
      title: 'Error en el software',
      description: 'El software se cierra inesperadamente',
      assignee: 'Jane Smith',
    },
  ]);

  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    assignee: '',
  });

  const handleCreateTicket = () => {
    setTickets([...tickets, { ...newTicket, id: tickets.length + 1 }]);
    setNewTicket({ title: '', description: '', assignee: '' });
  };

  const handleDeleteTicket = (id) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
  };

  const handleAssignTicket = (id, assignee) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, assignee } : ticket
    );
    setTickets(updatedTickets);
  };

  return (
    <div>
      <h2>Sistema de Mesa de Ayuda</h2>

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
            margin-right: 5px;
          }

          button:hover {
            background-color: #45a049;
          }

          /* Estilos para la lista de tickets */
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

      {/* Formulario para crear un nuevo ticket */}
      <div>
        <h3>Crear Ticket</h3>
        <form>
          <input
            type="text"
            placeholder="Título"
            value={newTicket.title}
            onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })}
          />
          <textarea
            placeholder="Descripción"
            value={newTicket.description}
            onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Asignar a"
            value={newTicket.assignee}
            onChange={(e) => setNewTicket({ ...newTicket, assignee: e.target.value })}
          />
          <button onClick={handleCreateTicket}>Crear</button>
        </form>
      </div>

      {/* Lista de tickets */}
      <div>
        <h3>Tickets</h3>
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              <strong>{ticket.title}</strong>
              <p>{ticket.description}</p>
              <p>Asignado a: {ticket.assignee}</p>
              <button onClick={() => handleDeleteTicket(ticket.id)}>Eliminar</button>
              <button onClick={() => handleAssignTicket(ticket.id, 'John Doe')}>Asignar a John Doe</button>
              <button onClick={() => handleAssignTicket(ticket.id, 'Jane Smith')}>Asignar a Jane Smith</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HelpDeskSystem;
