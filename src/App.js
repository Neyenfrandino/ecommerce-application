import { Routes, Route } from 'react-router-dom'
import Navigation from './routers/navigation/navigation.component'
import Home from './routers/home/home.component'
import Authentication from './routers/authentication/authentication.component' 


const MenuPrincipal = () => {
  return(
    <h1 style={{ textAlign: 'center' }}>Hola mundo </h1>
  )
}

const App = () =>{
  return(
    <Routes>
      <Route path='/' element={ <Navigation /> }>

        <Route index={'true'} element={ <Home /> } /> 
        <Route path='shop' element={ <MenuPrincipal /> } /> 
        <Route path='auth' element={ <Authentication /> } /> 

      </Route>
    </Routes>
  )
}

export default App