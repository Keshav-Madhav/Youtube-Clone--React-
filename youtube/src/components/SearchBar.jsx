import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={()=>{}} sx={{ borderRadius: 20, border:"1px solid #e3e3e3", paddingLeft: 2, boxShadow: "none", marginRight:{sm:5} }}>
        <input type="text" className="search-bar" placeholder='Search...' onChange={()=>{}} value=''/>
        <IconButton type="submit" sx={{ p: '10px', color:"red" }} aria-label="search">
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar