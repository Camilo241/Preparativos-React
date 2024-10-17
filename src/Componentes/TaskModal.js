import React, { useState } from "react";

const TaskModal = ({ addTask }) => {
    // Estado local para manejar los valores de los inputs del formulario
    const [task, setTask] = useState({
        name: "",
        description: "",
        category: "",
        importance: "",
        progress: ""
    });

    // Función que se ejecuta cuando el usuario escribe en algún input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value, // Actualiza el valor del campo específico
        });
    };

    // Función que se ejecuta cuando se envía el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task); // Llama a la función para añadir la tarea
    };

    return (
        <div className="modal">
            <h2>Agregar Nueva Tarea</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Descripción:
                    <input
                        type="text"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Categoría:
                    <input
                        type="text"
                        name="category"
                        value={task.category}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    Importancia:
                    <input
                        type="text"
                        name="importance"
                        value={task.importance}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    Progreso:
                    <input
                        type="text"
                        name="progress"
                        value={task.progress}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <button type="submit">Agregar Tarea</button>
            </form>
        </div>
    );
};

export default TaskModal;