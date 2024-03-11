import { signInWithPopupp, CreteUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
const SingIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithPopupp()
        console.log(user.uid)
        const userDocRef = await CreteUserDocumentFromAuth(user)
    }
    
    return(
        <div>
            <h1>Hola mundo estoy iniciando sesion</h1>
            <button onClick={logGoogleUser}>
                login whit google
            </button>

        </div>
    )
}

export default SingIn