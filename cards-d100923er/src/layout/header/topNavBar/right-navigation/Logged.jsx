import React, { useEffect, useState } from 'react'
import { Avatar, IconButton, Tooltip } from '@mui/material'
import { useMenu } from '../menu/MenuProvider'
import useUsers from '../../../../users/hooks/useUsers';
import { useUser } from '../../../../users/providers/UserProvider';

export default function Logged() {
  const setOpen = useMenu()
  const { handleGetUser } = useUsers();
  const { user } = useUser();
  const [userFullData, setUserFullData] = useState(null);

  useEffect(() => {
    if (user) {
      const getUser = async () => {
        setUserFullData(await handleGetUser(user._id));
      };
      getUser();
    }
  }, [user, handleGetUser]);

  if (!userFullData) return null;
  
  return (
    <Tooltip title='open settings'>
        <IconButton 
          sx={{p:0, display:'inline-flex',ml:2}} 
          onClick={()=>setOpen(true)}>
            <Avatar
              src={userFullData.image.url}
              alt={userFullData.image.alt}
              />
              
        </IconButton>
    </Tooltip>
  )
}
