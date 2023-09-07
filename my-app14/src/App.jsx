import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Explorar from './routers'
import './App.css'

function App() {
    return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/shorts' element={<div>shorts</div>} />
          <Route path='suscripciones' element={<div>suscripciones</div>} />
          <Route path='explorar' element={
              <div>
                <h1>Explorar</h1>
                <Outlet />
              </div>
            } 
          >
            <Route index element={<Explorar />} />
            <Route path='tendencias' element={<div>tendencias</div>} />
            <Route path='musica' element={<div>musica</div>} />
            <Route path='peliculas' element={<div>peliculas</div>} />
          </Route>
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
    </>
  )
}

export default App
