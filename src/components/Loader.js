import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <div className=" flex justify-center items-center h-[80vh] min-h-[95vh]" >
      <CircularProgress style={{height: '60px', width: '60px' }}/>
  </div>
);

export default Loader;