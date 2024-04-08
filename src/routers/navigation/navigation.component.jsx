import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'


import { ReactComponent as CrwonLogo} from '../../assests/crown.svg'  
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { SingOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDopdown from '../../components/cart-dopdown/cart-dopdown.component'


import './navigation.style.scss'

const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  
  return(
    <Fragment>
      <div className='navigation'>

        <Link className='logo-container' to='/'>
            <CrwonLogo className='logo'/> 
        </Link>
        
        <div className='nav-links-container'>
            
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>

            { currentUser ? (
              <span className='nav-link' onClick={ SingOutUser } > SING OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>
              SING-IN
              </Link>
            )} 
            <CartIcon/>
        </div>    

        {isCartOpen && <CartDopdown /> }   
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
