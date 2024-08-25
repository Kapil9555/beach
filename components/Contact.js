'use client'
import { Box, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Image from 'next/image';
import foodstall from "@/assests/foodStall.png"
import googleplay from "@/assests/playstore.png"
// import Footer from './Footer';
import food1 from "@/assests/img1.jpg"
import food2 from "@/assests/img2.jpg"
import food3 from "@/assests/img3.jpg"
import food4 from "@/assests/food3.jpg"
import food5 from "@/assests/img5.jpg"

// import food1 from "../../public/food1.jpg"

import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
    const router = useRouter()



    return (
        <>
            <Container maxWidth={'xl'} disableGutters>

                <Grid container justifyContent={'center'} sx={{ p: "10px", bgcolor: 'black',minHeight:'100vh' }}>
                    <Grid item lg={10} md={10} sm={10} xs={11.5} sx={{ mb: "25px" }}>
                        <Grid container sx={{ mt: "40px" }}>

                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Grid container>

                                <Grid item xs={12}>
                                        <Box sx={{ pr: "15px" }}>
                                            <Typography align='center' variant='h2' sx={{ color: "#E8E8E8", fontSize: 50, fontWeight: 600 }}>
                                               Contact Us
                                            </Typography>
                                            
                                        </Box>
                                    </Grid>


                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                                <Box sx={{ position: "relative", height: { lg: "300px", md: "350px", sm: "300px", xs: "230px" }, width: '100%' }}>
                                                    <Image src={food5} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "100%", }} />
                                                </Box>
                                            </Grid>
                                </Grid>

                                <Grid container sx={{ mt:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', bgcolor:'black', borderRadius:'10px'}} >
                            
                               
                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                <MailOutlineIcon sx={{ color: "white", fontSize: "50px" }} />
                                                <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Email</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px", fontWeight: "800", color: 'white' }}>Demo@gmail.com</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                    <CallIcon sx={{ color: "white", fontSize: "50px" }} />
                                                    <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Contact no.</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px", fontWeight: "800", color: 'white' }}>9999999999</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                <InstagramIcon sx={{ color: "white", fontSize: "50px" }} />
                                                    <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Instagram</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px", fontWeight: "800", color: 'white' }}>Demo_1111</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                <FacebookIcon sx={{ color: "white", fontSize: "50px" }} />
                                                <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Facebook</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px", fontWeight: "800", color: 'white' }}>Demo_0222</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                    
                        </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                  
                </Grid>
            </Container>
        </>
    )
}

export default Contact