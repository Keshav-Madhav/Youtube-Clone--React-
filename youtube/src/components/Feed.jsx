import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'


const Feed = () => {
  return (
    <Stack sx={{ flexDirection:{sm:"column", md:"row"}}}>
      <Box sx={{ height:{sm:"auto", md:"92vh"}, borderRight:"1px solid #3d3d3d", px:{sm:0, md:2}}}>
        <SideBar/>

        <Typography className='copright' variant='body2' sx={{ mt:1.5, color: '#fff' }}>
          Copyright 2023 killowatts
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed