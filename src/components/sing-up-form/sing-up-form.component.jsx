import { useState } from "react"
import { createAuthWithEmailAndPassword, CreateUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName : '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SingUpForm = () =>{

    const [formFields, setFormFields] = useState( defaultFormFields )
    const { displayName, email, password, confirmPassword } = formFields
    // console.log(formFields)

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
            const userDocRef = await CreateUserDocumentFromAuth(user, { displayName })

            resetFormfields()
        }catch(error){
            if (error.code == 'auth/email-already-in-use'){
                alert("He user alredy in use")
              }
        }
        
    };

    return(
        <div>
            <h1>
                Sing up whit your email and password 
            </h1>
            
            <form onSubmit={ handleSubmit }>
                <label>Display Name</label>
                <input 
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />

                <label>Email</label>
                <input 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <label>Password</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />

                <label>Confirm Password</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />

                <button type="submit">Sing up</button>
            </form>
          
        </div>

    )
}

export default SingUpForm