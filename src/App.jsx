import { useState } from 'react'

import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let saludo = 'bienvenido a Ecommerce'
  return (
    <div className="App">
      <NavBar/>
      <ItemContainer
      saludo={saludo}
      />
    </div>
  )
}

export default App
