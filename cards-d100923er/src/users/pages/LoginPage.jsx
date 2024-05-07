import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import { useUser } from "../providers/UserProvider";
import { Link, Navigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import { Button, Grid } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useTheme } from "../../providers/CustumThemeProvider";



export default function LoginPage() {
  const {isDark}=useTheme()

  const { handleLogin } = useUsers()

  const { user } = useUser()
  
  const { 
    data, 
    errors, 
    handleChange, 
    handleReset, 
    validateForm, 
    onSubmit 
  } = useForm(initialLoginForm, loginSchema, handleLogin);

  if(user) return <Navigate to={ROUTES.ROOT} replace/>

  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can log in"
      />
    
      <Container
        sx={{
          paddingTop: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px",color: isDark ? "white" : "black" }}
          to={ROUTES.ROOT}
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
            data={data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            data={data}
          />
        </Form>
      </Container>
          <Grid item xs={12} sx={{display:'flex',justifyContent:'center',}}>
            <Button
            variant="outlined"
            component={Link}
            to={ROUTES.SIGNUP}
            startIcon={<AccountBoxIcon/>}
            sx={{maxWidth:'50%'}}>
              Sign Up
            </Button>
          </Grid>
    </Container>
  );
}


