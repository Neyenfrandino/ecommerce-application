import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'

import { ReactComponent as CrwonLogo} from '../../assests/crown.svg'  
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { SingOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDopdown from '../../components/cart-dopdown/cart-dopdown.component'

import { NavigateContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.style'


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  
  return(
    <Fragment>
      <NavigateContainer>

        <LogoContainer to='/'>
            <CrwonLogo className='logo'/> 
        </LogoContainer>
        
        <NavLinksContainer>
            
            <NavLink to='/shop'>
                SHOP
            </NavLink>

            { currentUser ? (
              <NavLink as='span' onClick={ SingOutUser } > SING OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
              SING-IN
              </NavLink>
            )} 
            <CartIcon/>
        </NavLinksContainer>    

        {isCartOpen && <CartDopdown /> }   
      </NavigateContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
