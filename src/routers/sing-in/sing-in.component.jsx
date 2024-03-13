import { signInWithGooglePopup, CreateUserDocumentFromAuth, signInWithEmail } from '../../utils/firebase/firebase.utils'
import SingUpForm from '../../components/sing-up-form/sing-up-form.component'

const SingIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        console.log(user.uid)
        const userDocRef = await CreateUserDocumentFromAuth(user)
    }
    
    return(
        <div>
            <h1>Hola mundo estoy iniciando sesion</h1>
            <button onClick={logGoogleUser}>
                login whit google
            </button>

            <SingUpForm />

        </div>
    )
}

export default SingIn