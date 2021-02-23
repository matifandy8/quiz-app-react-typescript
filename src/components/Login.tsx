import React from 'react';
import { useForm } from 'react-hook-form'
import {Div,Main} from './Login.styles'



type Profile = {
    firstname: string
    lastname: string
    age: number
  }
  

const Login: React.FC = (props) =>{ 

    const {register, handleSubmit, errors} = useForm<Profile>()

    const onSubmit = handleSubmit((data) => {
      alert(JSON.stringify(data))

    })

    return(
        <Main>

        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <div>
            <input ref={register({ required: true })} id="firstname" name="firstname" type="text" placeholder="Type your FirstName"/>
            {
              errors.firstname && <Div className="error">Enter your name</Div>
            }
          </div>
          <div>
            <input ref={register({ required: true })} id="lastname" name="lastname" type="text" placeholder="Type your LastName"/>
            {
              errors.lastname && <Div className="error">Enter your last name</Div>
            }
          </div>
          <div>
            <input ref={register({ required: true })} id="password" name="password" type="password" placeholder="Type your Password"/>
            {
              errors.age && <Div className="error">Enter your Password</Div>
            }
          </div>
          <button type="submit">Save</button>
        </form>
        </Main>
    );
};

export default Login;