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

const About = () => {
    const router = useRouter()

    

    return (
        <>
            <Container maxWidth={'xl'} disableGutters>

                <Grid container justifyContent={'center'} sx={{ p: "10px", bgcolor: 'black' }}>
                    <Grid item lg={10} md={10} sm={10} xs={11.5} sx={{ mb: "25px" }}>
                        <Grid container sx={{ mt: "40px" }}>

                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Grid container>

                                    <Grid item xs={6}>
                                        <Box sx={{ position: "relative", height: { lg: "350px", md: "350px", sm: "300px", xs: "230px" }, width: "fit-content" }}>
                                            <Image src={food1} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "auto", boxSizing: "border-box" }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Box sx={{ pr: "15px" }}>
                                            <Typography variant='h4' sx={{ color: "#E8E8E8", fontSize: 30, fontWeight: 600 }}>
                                                About Our First Films
                                                Production House
                                            </Typography>
                                            <Typography variant='h6' sx={{ color: "#C8C8C8", mt: '10px' }}>
                                                We are a leading production house that specializes in creating
                                                high-quality video content for a wide range of clients.
                                                Our experienced team of professionals is dedicated to bringing
                                                your vision to life through innovative storytelling and state-of-theart production techniques.
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sx={{ mt: '20px' }}>
                                        <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{border:'5px solid #bdbdbd',borderRadius:'8px',p:'15px'}}>
                                            <Grid item container justifyContent={'space-between'} xs={7.8} sx={{}}>
                                                <Grid item xs={12} sx={{ mb: '15px' }}>
                                                    <Typography variant='h4' sx={{ color: "#E8E8E8", fontSize: 35, fontWeight: 600 }}>
                                                        Our Mission
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5.8} sx={{ bgcolor: '#616161', backgroundBlendMode: "lighten", borderRadius: '12px' }}>
                                                    <Box sx={{ height: 180, p: "10px" }}>
                                                        <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "30px", mt: '7px' }}>
                                                            Exceptional Storytelling
                                                        </Typography>
                                                        <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>We are committed to crafting
                                                            compelling narratives that
                                                            captivate audiences and leave a
                                                            lasting impact.</Typography>
                                                    </Box>
                                                </Grid>

                                                <Grid item xs={5.8} sx={{ bgcolor: '#616161', backgroundBlendMode: "lighten", borderRadius: '12px' }}>
                                                    <Box sx={{ height: 180, p: "10px" }}>
                                                        <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "30px", mt: '7px' }}>
                                                            Innovative Approach
                                                        </Typography>
                                                        <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>We are committed to crafting
                                                            Our team constantly seeks new
                                                            ways to push the boundaries of
                                                            video production and deliver
                                                            unique, cutting-edge solutions</Typography>
                                                    </Box>
                                                </Grid>

                                                <Grid item xs={12} sx={{ bgcolor: '#616161', backgroundBlendMode: "lighten", mt: '20px', borderRadius: '12px' }}>
                                                    <Box sx={{ height: 180, p: "10px" }}>
                                                        <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "30px", mt: '7px' }}>
                                                            Exceptional Storytelling
                                                        </Typography>
                                                        <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>We are committed to crafting
                                                            compelling narratives that
                                                            captivate audiences and leave a
                                                            lasting impact.</Typography>
                                                    </Box>
                                                </Grid>

                                            </Grid>

                                            <Grid item container xs={3.8} sx={{ overflow: 'hidden' }}>

                                                <Grid item xs={12} sx={{ position: "relative" }}>
                                                    <Image src={food2} alt='foodstall' style={{ height: "270px", width: "auto", boxSizing: "border-box" }} />
                                                </Grid>
                                                <Grid item xs={12} sx={{ position: "relative" }}>
                                                    <Image src={food3} alt='foodstall' style={{ height: "270px", width: "auto", boxSizing: "border-box" }} />
                                                </Grid>

                                            </Grid>

                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sx={{mt:'20px'}}>
                                        <Grid container justifyContent={'center'} sx={{border:'5px solid #bdbdbd',borderRadius:'8px',p:'15px'}}>
                                            <Grid item xs={12} sx={{ mt: '20px' }}>
                                                <Box sx={{ position: "relative", height: { lg: "300px", md: "350px", sm: "300px", xs: "230px" }, width: '100%' }}>
                                                    <Image src={food5} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "100%", }} />
                                                </Box>
                                            </Grid>

                                            <Grid item container xs={12} sx={{ mt: '20px' }}>
                                                <Grid item xs={12} sx={{}}>
                                                    <Typography variant='h4' sx={{ color: "#E8E8E8", fontSize: 35, fontWeight: 600 }}>
                                                        Our Clients
                                                    </Typography>
                                                </Grid>
                                                <Grid item container justifyContent={'space-between'} xs={12} sx={{ backgroundBlendMode: "lighten", borderRadius: '12px' }}>
                                                    <Grid item xs={3.8} sx={{  p: "10px" }}>
                                                        <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "25px", mt: '7px' }}>
                                                            <span style={{ backgroundColor: '#616161', padding: '2px 10px', borderRadius: '6px' }}>1</span>  Fortune 200 Brands
                                                        </Typography>
                                                        <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>We've had the
                                                            privilege of
                                                            collaborating with
                                                            some of the world's
                                                            most recognized
                                                            brands, delivering
                                                            captivating content
                                                            that resonates with
                                                            their target audiences.</Typography>
                                                    </Grid>
                                                    <Grid item xs={3.8} sx={{p: "10px" }}>
                                                        <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "25px", mt: '7px' }}>
                                                            <span style={{ backgroundColor: '#616161', padding: '2px 10px', borderRadius: '6px' }}>2</span>  Innovative Startups
                                                        </Typography>
                                                        <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>Our team thrives on
                                                            working with
                                                            ambitious, forwardthinking companies
                                                            to bring their ideas
                                                            to life through
                                                            visually stunning
                                                            and impactful video
                                                            productions</Typography>
                                                    </Grid>
                                                    <Grid item xs={3.8} sx={{ p: "10px" }}>
                                                        <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "25px", mt: '7px' }}>
                                                            <span style={{ backgroundColor: '#616161', padding: '2px 10px', borderRadius: '6px' }}>3</span>Non-Profit Organizations
                                                        </Typography>
                                                        <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>We're proud to
                                                            support non-profit
                                                            organizations in their
                                                            efforts to raise
                                                            awareness and
                                                            drive change
                                                            through powerful
                                                            video storytelling.</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} sx={{mt:'20px'}}>
                                        <Grid item container xs={12} sx={{border:'5px solid #bdbdbd',borderRadius:'8px',p:'15px'}}>
                                            <Grid item xs={12} sx={{}}>
                                                <Typography variant='h4' sx={{ color: "#E8E8E8", fontSize: 35, fontWeight: 600 }}>
                                                    Our Team
                                                </Typography>
                                            </Grid>
                                            <Grid item container justifyContent={'space-between'} xs={12} sx={{ backgroundBlendMode: "lighten", borderRadius: '12px' }}>
                                                <Grid item xs={3.8} sx={{ p: "10px" }}>
                                                    <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "25px", mt: '7px' }}>
                                                        Creative Visionaries
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>Our team of talented
                                                        directors,
                                                        cinematographers, and
                                                        editors bring a wealth of
                                                        experience and a
                                                        passion for pushing the
                                                        boundaries of what's
                                                        possible in video
                                                        production.</Typography>
                                                </Grid>
                                                <Grid item xs={3.8} sx={{ p: "10px" }}>
                                                    <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "25px", mt: '7px' }}>
                                                        Technical Experts
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>From lighting technicians
                                                        to audio engineers, our
                                                        crew is composed of
                                                        skilled professionals who
                                                        ensure the highest
                                                        production value in every
                                                        project.</Typography>
                                                </Grid>
                                                <Grid item xs={3.8} sx={{ p: "10px" }}>
                                                    <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize: "25px", mt: '7px' }}>
                                                        Project Managers
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize: '20px', lineHeight: '30px', mt: '7px' }}>Our meticulous project
                                                        managers oversee every
                                                        aspect of the production
                                                        process, ensuring
                                                        seamless coordination
                                                        and on-time delivery.</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Box sx={{ position: "fixed", cursor: "pointer", bottom: "0px", left: "50%", right: "50%", transform: "translate(-50%, -50%)", width: "fit-content" }} >
                            <Link href="/item-list/65bfcad6b33fd8b324f87b25" style={{textDecoration:'none'}}>
                                <Box sx={{ height: "40px", width: "fit-content", p: "0px 25px", borderRadius: "25px", bgcolor: "#4caf50", display: "flex", alignItems: "center", justifyContent: "center" }} >
                                    <Typography sx={{ fontWeight: 700, color: "white", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>Demo Menu <QrCode2Icon sx={{ ml: "5px" }} /></Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
        </>
    )
}

export default About