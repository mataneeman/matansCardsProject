import React from 'react'
import Joi from 'joi'
import { Container } from '@mui/material';
import Form from '../forms/components/Form';
import ROUTES from '../routes/routesModel';
import Input from '../forms/components/Input';
import useForm from '../forms/hooks/useForm';


const handleSubmit=(data)=>{
  console.log(data);
}

export default function Login() {
 
    const initialLoginForm = {
        email: "",
        password: "",
    };
      const loginSchema = {
        email: Joi.string()
          .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
          .rule({ message: "Please enter a valid mail" })
          .required(),
          password: Joi.string()
            .ruleset.regex(
              /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
            )
            .rule({
              message:
                "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
            })
            .required(),
        };

        const { data, errors, handleChange, onSubmit, handleReset, validateForm } =
        useForm(initialLoginForm, loginSchema, handleSubmit);
    

        
        
return (
    <Container>
     <Form
      title="Login Page"
      onSubmit={onSubmit}
      onReset={handleReset}
      styles={{ maxWidth: "450px" }}
      validateForm={validateForm}
      to={ROUTES.SANDBOX}>
        <Input
         label="email"
         name="email"
         data={data}
         error={errors.email}
         onChange={handleChange}/>
          <Input
         label="password"
         name="password"
         data={data}
         error={errors.password}
         onChange={handleChange}/>

     </Form>
    </Container>
  )
}
