'use client'
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import HeaderHome from './HeaderHome';

const Home = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden', margin: 0, padding: 0, }}>
            {/* HeaderHome Component */}
            <Box sx={{ position: 'absolute', top: 0, width: '100%',zIndex: 10 }} onClick={() => { console.log("Header clicked") }}>
                <HeaderHome />
            </Box>

            {/* Background Video */}
            <Box 
                component="video" 
                src="/backvedio.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    zIndex: 0 
                }} 
            />

            {/* Black Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            />

            {/* Centered Content */}
            <Grid 
                container 
                sx={{ 
                    height: '100%', 
                    zIndex: 2, 
                    position: 'relative', 
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* Add your centered content here */}
                <Grid item xs={12}>
                    <Typography 
                        variant="h1" 
                        sx={{ 
                            animation: 'move-text 10s linear infinite', 
                            whiteSpace: 'nowrap'
                        }}
                    >
                        First Films Production
                    </Typography>
                </Grid>
            </Grid>

            {/* Keyframes for Animation */}
            <style>
                {`
                    @keyframes move-text {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                `}
            </style>
        </Box>
    );
};

export default Home;
