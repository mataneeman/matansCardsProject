import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import Container from "@mui/material/Container";
import SignupForm from "../components/SignupForm";
import PageHeader from "../../components/PageHeader";
import { Link, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button, Grid } from "@mui/material";
import { useTheme } from "../../providers/CustomThemeProvider";



export default function SignupPage() {
  const {isDark} =useTheme()
  const { handleSignup }=useUsers()
  const {user} =useUser()
  const { 
    data, 
    errors, 
    handleChange, 
    handleReset, 
    validateForm, 
    onSubmit, 
    handleChangeCheckBox } = 
    useForm(initialSignupForm, signupSchema, handleSignup);

  if(user) return <Navigate to={ROUTES.ROOT} replace/>

  return (
    <Container>
      <PageHeader
        title="Welcome to Signup Page"
        subtitle="here you can sign up"
      />
      <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Button
            variant="outlined"
            component={Link}
            to={ROUTES.LOGIN}
            startIcon={<AccountBoxIcon/>}
            sx={{maxWidth:'50%'}}>
              Log in
            </Button>
          </Grid>
    
    <Container
      sx={{
        paddingTop: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: isDark ? "white" : "black" 
      }}
      >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
        handleChangeCheckBox={handleChangeCheckBox}
        />
    </Container>
   </Container>
  );
}