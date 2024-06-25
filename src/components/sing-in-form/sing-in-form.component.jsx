import { useState } from "react"
import { SignInAuthWithEmailAndPassword,
        signInWithGooglePopup } 
from '../../utils/firebase/firebase.utils'

import FormInput from "../form-input/form-input.component"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"


import './sing-in-form.style.scss'


const defaultFormFields = {
    email: '',
    password: ''
}

const SingInForm = () =>{

    const [formFields, setFormFields] = useState( defaultFormFields )
    const { email, password } = formFields


    const resetFormfields = () => {
        setFormFields(defaultFormFields)
    }

    
    const singInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        console.log(user.uid)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({ ...formFields, [name] : value })
    }

    const handleSubmit = async (event)=> {
        event.preventDefault();
        try{
            const { user } = await SignInAuthWithEmailAndPassword(email, password)
            resetFormfields()
           

        }catch(error){
            if (error.code == 'auth/invalid-credential'){
                alert("He user don't exists")
            } 
        }
    }

    return(
        <div className = "sing-up-container">
     
            <h2>I already have an account ?</h2>
            <span>Sing in with Email anda Pasword</span>

            <form onSubmit={ handleSubmit }>
                <FormInput
                    label= 'Email'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <FormInput
                    label= 'Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                
                <div className="buttons-container">
                    <Button type= 'submit'>Sing-In</Button>
                    <Button type= 'button' onClick={ singInWithGoogle } buttonType={BUTTON_TYPE_CLASSES.google}>Sing In with Google</Button>
    
                </div>
                
            </form>
                
        </div>
    )
}

export default SingInForm