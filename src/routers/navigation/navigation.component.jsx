import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'


import { ReactComponent as CrwonLogo} from '../../assests/crown.svg'  
import { UserContext } from '../../contexts/user.context'

import { SingOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.style.scss'

const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)
  
  const singOutHendle = async () => {
    await SingOutUser()
    setCurrentUser(null)
  }
  
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
              <span className='nav-link' onClick={ singOutHendle } > SING OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>
              SING-IN
              </Link>
            )} 

        </div>        
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
