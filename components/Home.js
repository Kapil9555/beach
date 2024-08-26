'use client'
import { Box, Grid, Typography } from '@mui/material';

const Home = () => {
    return (
        <>
            <Grid container sx={{position:'relative',minHeight:{lg:'80vh',md:'80vh',sm:'50vh',xs:'50vh'}}}>
                <Grid item xs={12} sx={{}}>
                  <Box sx={{ overflow: 'hidden', margin: 0, padding: 0}}>
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
                    zIndex: 0 ,
                   boxSizing:'border-box'
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
                    position: 'absolute', 
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                {/* Add your centered content here */}
                <Grid item xs={12} sx={{}}>
                    <Typography
                      
                        sx={{ 
                            animation: 'move-text 10s linear infinite', 
                            whiteSpace: 'nowrap',
                            fontSize:{lg:'40px',md:'40px',sm:'30px',xs:'30px'}
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
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
