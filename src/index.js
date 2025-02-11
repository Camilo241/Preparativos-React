import React from 'react'
import ReactDOM from 'react-dom'

// creacion de array con las variables que los identifican
const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// creamos la variable coountry y le decimos que dentro de ella esta el name y city
// en el div definimos un h1 que tendra el nombre y un small que tendra la cuidad
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// creamos una variable que se llama countries y contiene a countries 
// .map´me permite recorrer el array country y organizarlo
// key me permite definir la llave que en este caso es name y el country me permite pasar cada pais de country
// Se devuelve un <div> que contiene la lista de componentes Country.
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

// me crea una variable llamada app
// contiene 2 div en donde en el primero me define el classname
// un h1 que me define el titulo de mi matriz 
// en el countries me va a mostar los paises que tenga en el conuntries 

const App = () => (
  <div className='container'>
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)