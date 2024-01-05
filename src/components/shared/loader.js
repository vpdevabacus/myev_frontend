import { CircularProgress } from '@mui/material';
import React from 'react'

const Loader = () => {
    return (
        <div className='h-full w-full absolute top-[0] left-[0] bg-[#aaaaaa9e] z-[11] flex justify-center items-center'>
            <CircularProgress sx={{ color: '#0B7132' }} />
        </div>
    )
}

export default Loader;