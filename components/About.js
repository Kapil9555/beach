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
        <Grid container justifyContent={'center'} sx={{ bgcolor: 'black' }}>
            <Grid item container justifyContent={'center'} lg={10} md={10} sm={12} xs={12}>
                <Grid item xs={11} sx={{mt:'20px'}}>
                    <Typography  variant='h1' sx={{ color: "#E8E8E8", fontSize: 40, fontWeight: 600 }}>
                        About us
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ pt: "20px", bgcolor: 'black' }}>
                    <Grid container justifyContent={'center'}>

                        <Grid item xs={11} sm={11} md={6} lg={6} sx={{display:'flex',justifyContent:'center'}}>
                            <Box sx={{ position: "relative", height: { lg: "350px", md: "350px", sm: "300px", xs: "290px" }, width: "fit-content" }}>
                                <Image src={food1} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "auto", boxSizing: "border-box" }} />
                            </Box>
                        </Grid>

                        <Grid item xs={11} sm={11} md={6} lg={6}>
                            <Box sx={{ pr: "15px" }}>
                                <Typography variant='h4' sx={{ color: "#E8E8E8",mt:{lg:'',md:'',sm:'10px',xs:'10px'}, fontSize:{lg:30,md:30,sm:25,xs:25}, fontWeight: 600 }}>
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
                            <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ border:{lg:'5px solid #bdbdbd',md:'5px solid #bdbdbd',sm:'5px solid #bdbdbd',xs:'none'}, borderRadius: '8px', p: '15px' }}>
                                <Grid item container lg={7.8} md={7.8} sm={12} xs={12} sx={{justifyContent:{lg:'space-between',md:'space-between',sm:'space-between',xs:'center'}}}>
                                    <Grid item xs={12} sx={{ mb: '15px' }}>
                                        <Typography variant='h4'  sx={{ color: "#E8E8E8", fontSize: 35, fontWeight: 600 }}>
                                            Our Mission
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={5.8} md={5.8} sm={5.8} xs={11} sx={{ bgcolor: '#616161', backgroundBlendMode: "lighten", borderRadius: '12px' }}>
                                        <Box sx={{ height: 180, p: "10px" }}>
                                            <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize:{lg:"30px",md:'30px',sm:'20px',xs:'20px'}, mt: '7px' }}>
                                                Exceptional Storytelling
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize:{lg:"20px",md:'20px',sm:'15px',xs:'15px'}, lineHeight:{lg:'30px',md:'30px',xs:'20px',sm:'20px'}, mt: '7px' }}>We are committed to crafting
                                                compelling narratives that
                                                captivate audiences and leave a
                                                lasting impact.</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={5.8} md={5.8} sm={5.8} xs={11} sx={{ bgcolor: '#616161', backgroundBlendMode: "lighten",mt:{lg:'0px',md:'0px',sm:'10px',xs:'10px'}, borderRadius: '12px' }}>
                                        <Box sx={{ height: 180, p: "10px" }}>
                                            <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize:{lg:"30px",md:'30px',sm:'20px',xs:'20px'}, mt: '7px' }}>
                                                Innovative Approach
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: "#C8C8C8",overflow:'hidden',  fontSize:{lg:"20px",md:'20px',sm:'15px',xs:'15px'}, lineHeight:{lg:'30px',md:'30px',xs:'20px',sm:'20px'}, mt: '7px' }}>We are committed to crafting
                                                Our team constantly seeks new
                                                ways to push the boundaries of
                                                video production and deliver
                                                unique, cutting-edge solutions</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={11} sm={11} md={12} lg={12} sx={{ bgcolor: '#616161', backgroundBlendMode: "lighten",mt:{lg:'20px',md:'20px',sm:'10px',xs:'10px'}, borderRadius: '12px' }}>
                                        <Box sx={{ height: 180, p: "10px" }}>
                                            <Typography variant='h5' sx={{ color: "#E8E8E8", fontSize:{lg:"30px",md:'30px',sm:'20px',xs:'20px'}, mt: '7px' }}>
                                                Exceptional Storytelling
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: "#C8C8C8", fontSize:{lg:"20px",md:'20px',sm:'15px',xs:'15px'}, lineHeight:{lg:'30px',md:'30px',xs:'20px',sm:'20px'}, lineHeight: '30px', mt: '7px' }}>We are committed to crafting
                                                compelling narratives that
                                                captivate audiences and leave a
                                                lasting impact.</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>

                                <Grid item container lg={3.8} md={3.8} sm={12} xs={12} sx={{ overflow: 'hidden',mt:{lg:'0px',md:'0px',sm:'15px',xs:'15px'} }}>

                                    <Grid item xs={12} sx={{ position: "relative" }}>
                                        <Image src={food2} alt='foodstall' style={{ height: "270px", width: "auto", boxSizing: "border-box" }} />
                                    </Grid>
                                    <Grid item xs={12} sx={{ position: "relative" }}>
                                        <Image src={food3} alt='foodstall' style={{ height: "270px", width: "auto", boxSizing: "border-box" }} />
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: '20px' }}>
                            <Grid container justifyContent={'center'} sx={{  border:{lg:'5px solid #bdbdbd',md:'5px solid #bdbdbd',sm:'5px solid #bdbdbd',xs:'none'}, borderRadius: '8px', p: '15px' }}>
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
                                        <Grid item lg={3.8} md={3.8} sm={12} xs={12} sx={{ p: "10px" }}>
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
                                        <Grid item lg={3.8} md={3.8} sm={12} xs={12} sx={{ p: "10px" }}>
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
                                        <Grid item lg={3.8} md={3.8} sm={12} xs={12} sx={{ p: "10px" }}>
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

                        <Grid item xs={12} sx={{ mt: '20px' }}>
                            <Grid item container xs={12} sx={{border:{lg:'5px solid #bdbdbd',md:'5px solid #bdbdbd',sm:'5px solid #bdbdbd',xs:'none'}, borderRadius: '8px', p: '15px' }}>
                                <Grid item xs={12} sx={{}}>
                                    <Typography variant='h4' sx={{ color: "#E8E8E8", fontSize: 35, fontWeight: 600 }}>
                                        Our Team
                                    </Typography>
                                </Grid>
                                <Grid item container justifyContent={'space-between'} xs={12} sx={{ backgroundBlendMode: "lighten", borderRadius: '12px' }}>
                                    <Grid item lg={3.8} md={3.8} sm={12} xs={12} sx={{ p: "10px" }}>
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
                                    <Grid item lg={3.8} md={3.8} sm={12} xs={12} sx={{ p: "10px" }}>
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
                                    <Grid item lg={3.8} md={3.8} sm={12} xs={12} sx={{ p: "10px" }}>
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
    )
}

export default About