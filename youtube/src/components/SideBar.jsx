import React from 'react'
import {Stack} from '@mui/material';
import { categories } from '../utils/constants';

const SelectedCat='New';

const SideBar = () => {
    return (
        <Stack direction="row" sx={{ overflowY:"auto", height:{sx:'auto', md:'95%'}, flexDirection: {md:'column'} }}>
            {categories.map((category) => (
                <button className='category-btn' style={{ background: category.name === SelectedCat && '#fc1503', color:'white'}} key={category.name}>
                    <span style={{ color: category.name === SelectedCat ? 'white' : 'red' , marginRight:"15px"}}>{category.icon}</span>
                    <span style={{ opacity: category.name === SelectedCat ? '1' : '0.8'}}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default SideBar