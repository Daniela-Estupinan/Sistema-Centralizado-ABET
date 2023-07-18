import React, { useState } from 'react';

const NextcloudSystem = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'Archivo1.txt', size: '10KB' },
    { id: 2, name: 'Documento.docx', size: '50KB' },
    // Más archivos aquí...
  ]);

  const [newFile, setNewFile] = useState({
    name: '',
    size: '',
  });

  const handleUploadFile = () => {
    setFiles([...files, { ...newFile, id: files.length + 1 }]);
    setNewFile({ name: '', size: '' });
  };

  const handleDeleteFile = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  return (
    <div>
      <h2>Sistema de Almacenamiento en Línea</h2>

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

          /* Estilos para la lista de archivos */
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

      {/* Formulario para subir un nuevo archivo */}
      <div>
        <h3>Subir Archivo</h3>
        <form>
          <input
            type="text"
            placeholder="Nombre del archivo"
            value={newFile.name}
            onChange={(e) => setNewFile({ ...newFile, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tamaño del archivo"
            value={newFile.size}
            onChange={(e) => setNewFile({ ...newFile, size: e.target.value })}
          />
          </form>
          <button onClick={handleUploadFile}>Subir</button>
        
      </div>

      {/* Lista de archivos */}
      <div>
        <h3>Archivos</h3>
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              {file.name} - Tamaño: {file.size}
              <button onClick={() => handleDeleteFile(file.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NextcloudSystem;
