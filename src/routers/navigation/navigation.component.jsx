import { Outlet, Link } from 'react-router-dom'

import { Fragment } from 'react'
import { ReactComponent as CrwonLogo} from '../../assests/crown.svg'

import './navigation.style.scss'

const Navigation = () => {
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

            <Link className='nav-link' to='/auth'>
                SING-IN
            </Link>

        </div>
        
      </div>

      <Outlet />
    </Fragment>
  )
}

export default Navigation
