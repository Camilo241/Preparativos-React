import logo from './logo.svg';
import './App.css';
import MyButton from './Componentes/MyButton';
import Form from './Componentes/From';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import About from './Componentes/About';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita and save to reload.
        </p>

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
        </div>
      </header>



    </div>
  );
}

export default App;
