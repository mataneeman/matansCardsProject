import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios";
import { Avatar, Box, Button, Typography } from '@mui/material';
import Spinner from '../components/Spinner';

export default function Countries() {
    const[countriesList,setCountriesList]=useState([])
    const[refreshList,setRefreshList]=useState(false)

    const refresh=useCallback(()=>{
      setCountriesList([])
      setRefreshList((prev)=>!prev)
    },[])

    const getAllCountries= useCallback(async()=>{
        try{
            const response = await axios.get('https://restcountries.com/v3.1/all')
            const data = response.data
            setCountriesList(data)
        }
        catch(error){
            console.log("error",error);
        }
    },[])

    useEffect(()=>{
       getAllCountries();
    },[refreshList,getAllCountries])
    console.log(refreshList);
    
    return (
        <div>
          <Box mb={2}>
            <Typography variant='h4' component='h1'>Country List:</Typography>
          <Button variant='contained'onClick={refresh}>Refresh</Button>
          
          {countriesList.length===0
            ?(<Spinner/>
            ):( countriesList.map((country,index) => (
              <Box
              display="flex"
              sx={{ justifyContent: "space-between",mb:2 }}
              key={index}
              >
                  <Avatar
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                    />
                  <Typography sx={{ width: "150px" }}>
                    {country.name.common}
                  </Typography>
                  <Typography sx={{ width: "150px" }}>
                    {country.capital?.[0]}
                  </Typography>
                </Box>
              ))
              )
            }
            </Box>
        </div>
      );
}
