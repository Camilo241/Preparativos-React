// import logo from './logo.svg';
import './Estilos/App.css';
import MyButton from './Componentes/MyButton';
// import Form from './Componentes/From';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Componentes/Home';
// import About from './Componentes/About';
import Tabla from './Componentes/Tabla';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
        <h1 className='Nombre'>Bienvenido</h1>
          
        <h2 className='Subtitulo'>Lista de Tareas</h2>
        <h3 className='BotonE'>
        <MyButton>Crear Tarea</MyButton>
        </h3>
        <h4></h4>
        <h5></h5>
        
        
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
