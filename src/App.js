// import './categories.style.scss'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './routers/navigation/navigation.component'
import Home from './routers/home/home.component'
import SingIn from './routers/sing-in/sing-in.component' 


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
        <Route path='holaMundoi' element={ <MenuPrincipal /> } /> 
        <Route path='sing-in' element={ <SingIn /> } /> 

      </Route>
    </Routes>
   
  )
}

export default App