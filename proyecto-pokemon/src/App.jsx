import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Pokemones from './components/Pokemones'
import CrearPokemon from './components/CrearPokemon'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Listado de Pokemones</Link>
        <Link to="/crear-usuario">Agregar Pokemon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Pokemones/>}></Route>
        <Route path="/crear-usuario" element={<CrearPokemon/>}></Route>
        <Route path="/update-usuario/:id" element={<CrearPokemon/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App