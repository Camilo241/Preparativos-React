import React, { useState } from "react";
import './Estilos/App.css';
import MyButton from './Componentes/MyButton';
import Tabla from './Componentes/Tabla';
import TaskModal from "./Componentes/TaskModal";

const App = () => {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Función que abre el modal cuando el usuario hace clic en el botón
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función que agrega una nueva tarea a la lista
  const addTask = (task) => {
    setTasks([...tasks, task]); // Agregar la tarea al estado
    setIsModalOpen(false); // Cierra el modal después de agregar la tarea
  };

  return (
    <div className="App">
      <header className="App-header">
        <body>
          <h1 className='Nombre'>Bienvenido</h1>

          <h2 className='Subtitulo'>Lista de Tareas</h2>
          <h3 className='BotonE'>
            <MyButton onClick={openModal}>Crear Tarea</MyButton>
            {isModalOpen && <TaskModal addTask={addTask} />}

            {/* Lista de tareas */}
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <strong>{task.name}</strong> - {task.description}
                </li>
              ))}
            </ul>
          </h3>
          


        </body>
        <div>

          <Tabla />
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        

        Learn React
        <div>
          <Form></Form>
          <Router>
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Routes>
          </Router>
        </div>

        <div>
          <MyButton></MyButton>
        </div> */}
      </header>



    </div>
  );
}

export default App;
