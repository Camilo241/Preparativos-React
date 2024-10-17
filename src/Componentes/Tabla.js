import React from 'react';
import '../Estilos/Tabla.css';

function Tabla() {
    const data = [
        { Id: 1, name: 'Juan', Descripcion: 'Adelnatar Taareas de IA', category: 'Universidad' },
        { Id: 2, name: 'Ana', Descripcion: 'Comprar las Cosas', category: 'Casa' },
        { Id: 3, name: 'Luis', Descripcion: 'Ahorro', category: 'Importante' },
    ];
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Importancia</th>
                        <th>Acciones</th>
                        <th>Progreso</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.Id}>
                            <td>{user.Id}</td>
                            <td>{user.name}</td>
                            <td>{user.Descripcion}</td>
                            <td>{user.category}</td>
                            <td>
                                <select>
                                    <option>Seleccione...</option>
                                    <option value="Baja">Baja</option>
                                    <option value="Media">Media</option>
                                    <option value="Alta">Alta</option>
                                </select>
                            </td>
                            <td>
                                <button className="edit-button">Editar</button>
                                <button className="delete-button">Eliminar</button>
                            </td>
                            <td>
                                <progress value="60" max="100"></progress>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Tabla;

