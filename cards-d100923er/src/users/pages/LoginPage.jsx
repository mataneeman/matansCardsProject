import React, { useEffect, useState } from "react";
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
import { Button, Grid, Typography } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useTheme } from "../../providers/CustomThemeProvider";
import { useSnack } from "../../providers/SnackbarProvider";



export default function LoginPage() {
  const {isDark}=useTheme()
  const { handleLogin,error } = useUsers()
  const { user } = useUser()
  const [blocked, setBlocked] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const setSnack = useSnack()
  const { 
    data, 
    errors, 
    handleChange, 
    handleReset, 
    validateForm, 
    onSubmit 
  } = useForm(initialLoginForm, loginSchema,handleLogin)
   
  useEffect(() => {
    const savedBlockData = JSON.parse(localStorage.getItem('blockData'));
    if (savedBlockData && savedBlockData.email === data.email) {
      const currentTime = new Date().getTime();
      if (currentTime < savedBlockData.blockUntil) {
        setBlocked(true);
        setSnack('error', 'Your account has blocked for 24 hours!');
      } else {
        localStorage.removeItem('blockData');
        setBlocked(false);
        setFailedAttempts(0);
      }
    }
  }, [data.email, setSnack]);

  useEffect(() => {
    if (failedAttempts >= 3) {
      setBlocked(true);
      const blockUntil = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem('blockData', JSON.stringify({ email: data.email, blockUntil }));
      setSnack('error', 'Your account is blocked for 24 hours!');
    }
  }, [failedAttempts, data.email, setSnack]);

  if(user) return <Navigate to={ROUTES.ROOT} replace/>

  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can log in to Your account"
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
          onSubmit={(e)=>{
            if(!blocked){
              onSubmit(e);
              setFailedAttempts(failedAttempts + 1); 
            }
          }}
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
          {error && (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            </Grid>
          )}
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


