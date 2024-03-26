import { useState, useContext, useEffect } from "react"
import { createAuthWithEmailAndPassword, 
        CreateUserDocumentFromAuth, 
        SignInAuthWithEmailAndPassword } 
from '../../utils/firebase/firebase.utils'

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { UserContext } from "../../contexts/user.context"
import './sing-up-form.style.scss'


const defaultFormFields = {
    displayName : '',
    email: '',
    password: '',
    confirmPassword: '',
    emailSingIn: '',
    passwordSingIn: ''
}

const SingUpForm = () =>{

    const [formFields, setFormFields] = useState( defaultFormFields )
    const { displayName, 
            email, 
            password, 
            confirmPassword,               
          } = formFields


    const { setCurrentUser } = useContext(UserContext);
  
    
            
    const resetFormfields = () => {
        setFormFields(defaultFormFields)
    }


    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({ ...formFields, [name] : value })
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword){
            console.error('somos iguales pero diferentes no te confundad ajaja ')
            return
        }
        try{
            const { user } = await createAuthWithEmailAndPassword(email, password);
            await CreateUserDocumentFromAuth(user, { displayName })
            setCurrentUser( user )

            resetFormfields()
        }catch(error){
            if (error.code == 'auth/email-already-in-use'){
                alert("He user alredy in use")
              }
        }
        
    };

    // const hendleSubmitWithEmailAndPassword = async (event)=> {
    //     event.preventDefault();
    //     try{
    //         const { user } = await SignInAuthWithEmailAndPassword(email, password)
    //         console.log( user )

    //     }catch(error){
    //         if (error.code == 'auth/invalid-credential'){
    //             alert("He user don't exists")
    //           }
    //     }
    // }

    return(
        <div className = "sing-up-container">
            <h2>
                Don't have an account? 
            </h2>

            <span>
                Sing up whit your email and password 
            </span>
        
            <form onSubmit={ handleSubmit }>
                <FormInput 
                    label= 'Display Name'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />

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

                <FormInput 
                    label= 'Confirm password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />

                <Button type="submit">Sing up</Button>
            </form>
        </div>
    )
}

export default SingUpForm