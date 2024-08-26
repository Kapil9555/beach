'use client'
import { Box, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Image from 'next/image';
import foodstall from "@/assests/foodStall.png"
import googleplay from "@/assests/playstore.png"
// import Footer from './Footer';
import photo1 from "@/assests/photo1.jpg"
import photo2 from "@/assests/photo2.jpg"
import photo3 from "@/assests/photo3.jpg"
import photo4 from "@/assests/photo4.jpg"
import photo5 from "@/assests/photo1.jpg"
import photo6 from "@/assests/photo8.jpeg"
import photo7 from "@/assests/photo7.jpg"
import photo8 from "@/assests/photo8.jpeg"

// import food1 from "../../public/food1.jpg"

import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Work = () => {
    const router = useRouter()
    const images = [
        { img: photo1 },
        { img: photo2 },
        { img: photo3 },
        { img: photo4 },
        { img: photo5 },
        { img: photo6 },
        { img: photo7 },
        { img: photo8 },

    ]


    return (
        <>


            <Grid container justifyContent={'center'} sx={{ bgcolor: 'black', pt: '20px' }}>
                <Grid item xs={11} md={10} lg={10} sm={11}  sx={{ mb: "25px" }}>
                    <Grid container sx={{}}>
                        <Grid item xs={12} sx={{ mt: '20px' }}>
                            <Typography  variant='h1' sx={{ color: "#E8E8E8", fontSize: 40, fontWeight: 600 }}>
                                 Our Work
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{mt:'20px'}}>
                            <Grid container>
                                {
                                    images.map((ele) => (
                                        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ cursor: 'pointer' }}>
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    height: { lg: "400px", md: "350px", sm: "300px", xs: "230px" },
                                                    width: '100%',
                                                    overflow: 'hidden', // Ensure the image stays within the box
                                                    '&:hover img': { // Target the image on hover
                                                        transform: 'scale(1.1)', // Scale the image
                                                        transition: 'transform 0.7s ease-in-out' // Slower transition
                                                    }
                                                }}
                                            >
                                                <Image
                                                    src={ele?.img}
                                                    alt='foodstall'
                                                    style={{
                                                        height: "100%",
                                                        width: "100%",
                                                        objectFit: 'cover', // Ensure the image covers the box
                                                        transition: 'transform 0.5s ease-in-out' // Slower transition
                                                    }}
                                                />
                                            </Box>
                                        </Grid>


                                    ))
                                }
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}

export default Work