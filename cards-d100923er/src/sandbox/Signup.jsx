import { Checkbox, Container, FormControlLabel, Grid } from '@mui/material';
import Joi from 'joi';
import React from 'react'
import Form from '../forms/components/Form';
import useForm from '../forms/hooks/useForm';
import ROUTES from '../routes/routesModel';
import Input from '../forms/components/Input';

const handleSubmit=(data)=>{
  console.log(data);
}

export default function Signup() {
    const initialSignupForm = {
        first: "",
        middle: "",
        last: "",
        phone: "",
        email: "",
        password: "",
        url: "",
        alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: 0,
        zip: 0,
        isBusiness: false,
      };
      const signupSchema = {
        first: Joi.string().min(2).max(256).required(),
        middle: Joi.string().min(2).max(256).allow(""),
        last: Joi.string().min(2).max(256).required(),
        phone: Joi.string()
          .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
          .rule({ message: 'user "phone" must be a valid phone number' })
          .required(),
        email: Joi.string()
          .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
          .rule({ message: 'user "mail" must be a valid mail' })
          .required(),
        password: Joi.string()
          .ruleset.regex(
            /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
          )
          .rule({
            message:
              'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
          })
          .required(),
        url: Joi.string()
          .ruleset.regex(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
          )
          .rule({ message: "user image must be a valid url" })
          .allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
        state: Joi.string().allow(""),
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().required(),
        zip: Joi.number(),
        isBusiness: Joi.boolean().required(),
      };

      const{data,errors,handleReset,onSubmit,handleChange,validateForm}=useForm(initialSignupForm,signupSchema,handleSubmit)
      
  return (
    <Container 
    sx={{
      pt: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Form
      title='singup page'
      onSubmit={onSubmit}
      onReset={handleReset}
      styles={{ maxWidth: "450px" }}
      validateForm={validateForm}
      to={ROUTES.SANDBOX}>
        <Input
        label='first'
        name='first'
        data={data}
        error={errors.first}
        onChange={handleChange}/>
         <Input
        label='middle'
        name='middle'
        data={data}
        error={errors.middle}
        onChange={handleChange}/>
        <Input
        label='last'
        name='last'
        data={data}
        error={errors.last}
        onChange={handleChange}/> 
        <Input
        label='phone'
        name='phone'
        data={data}
        error={errors.phone}
        onChange={handleChange}/> 
        <Input
        label='email'
        name='email'
        data={data}
        error={errors.email}
        onChange={handleChange}/> 
        <Input
        label='password'
        name='password'
        data={data}
        error={errors.password}
        onChange={handleChange}/> 
        <Input
        label='url'
        name='url'
        data={data}
        error={errors.url}
        onChange={handleChange}/> 
        <Input
        label='alt'
        name='alt'
        data={data}
        error={errors.alt}
        onChange={handleChange}/> 
        <Input
        label='state'
        name='state'
        data={data}
        error={errors.state}
        onChange={handleChange}/> 
        <Input
        label='country'
        name='country'
        data={data}
        error={errors.country}
        onChange={handleChange}/>
        <Input
        label='city'
        name='city'
        data={data}
        error={errors.city}
        onChange={handleChange}/> 
        <Input
        label='street'
        name='street'
        data={data}
        error={errors.street}
        onChange={handleChange}/> 
        <Input
        label='houseNumber'
        name='houseNumber'
        data={data}
        error={errors.houseNumber}
        onChange={handleChange}/> 
        <Input
        label='zip'
        name='zip'
        data={data}
        error={errors.zip}
        onChange={handleChange}/>
         <Grid item>
            <FormControlLabel   
              name="isBusiness"
              control={<Checkbox value={data}/>}
              label='is Business'/>
          </Grid>
        
      </Form>
    </Container>
  )
}
