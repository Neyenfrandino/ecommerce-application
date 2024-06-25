import { Outlet } from 'react-router-dom'
import { Fragment, useContext } from 'react'

import { ReactComponent as CrwonLogo} from '../../assests/crown.svg'  
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { SingOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDopdown from '../../components/cart-dopdown/cart-dopdown.component'

import { NavigateContainer, LogoContainer, NavLinksContainer, NavLink, Placeholder, Wrapper } from './navigation.style'


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  
  return (
    <Fragment>
      <Wrapper>
        <NavigateContainer>
          <LogoContainer to='/'>
            <CrwonLogo className='logo' />
          </LogoContainer>

          <NavLinksContainer>
            <NavLink to='/shop'>
              SHOP
            </NavLink>

            {currentUser ? (
              <NavLink as='span' onClick={SingOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN-IN
              </NavLink>
            )}
            <CartIcon />
          </NavLinksContainer>

          {isCartOpen && <CartDopdown />}
        </NavigateContainer>
        <Placeholder />
      </Wrapper>
      <Outlet />
    </Fragment>
  );
};


export default Navigation
