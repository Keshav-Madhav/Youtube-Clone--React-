import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import {Feed, Navbar, SearchFeed, VideoDetail, ChannelDetail} from './components';

const App = () =>(
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
          <Route path="/channel/:id" element={<ChannelDetail/>} />
        </Routes>
      </Box>
    </Router>
)

export default App