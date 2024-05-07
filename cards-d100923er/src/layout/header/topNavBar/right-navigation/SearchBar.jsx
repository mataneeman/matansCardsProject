import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    const [searchParams,setSearch] = useSearchParams()
    const handleChange = ({ target }) => setSearch({q: target.value})
  return (
    <Box display={{sm:"inline-flex"}}>
      <FormControl variant='standard'>
        <OutlinedInput
        sx={{borderRadius:5,border:1}}
        placeholder='Search..'
        size='small'
        value={searchParams.get("q") ?? ""}
        onChange={handleChange}
        endAdornment={
        <InputAdornment position='end'>
          <IconButton edge="end">
            <SearchIcon/>
          </IconButton>
        </InputAdornment>
       }/>
      </FormControl>
    </Box>
  )
}
export default SearchBar
