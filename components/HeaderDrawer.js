'use client'
import logo from '@/assests/first-films-high-resolution-logo.png';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const HeaderDrawer = () => {
  const router = useRouter()



  return (
    <Grid container justifyContent={'center'} sx={{ zIndex:999,height:{lg:"80px",md:"80px",sm:"75px",xs:"70px"}, bgcolor: "black", color: "#455a64",borderBottom:"1px solid #9e9e9e", position: "sticky", top: "0px",display:"flex",alignItems:"center",justifyContent:"center" }}>
      <Grid item xs={11.5} sx={{height:"100%"}}>
        <Grid container alignItems={'center'} justifyContent={'space-between'} sx={{height:"100%"}}>
            <Grid item xs={3} sm={4} md={2} lg={2} sx={{display:"flex",height:"100%",alignItems:"center",justifyContent:{xs:"center",sm:"center",md:"left",lg:"left"}}} onClick={()=>{router.push('/')}}>
               <Box sx={{height:{lg:"60px",md:"60px",sm:"50px",xs:"40px"},width:{lg:"100px",md:"100px",sm:"80px",xs:"60px"},position:"relative"}}>
                  <Image src={logo} alt='logo'  style={{position:"",height:"auto",width:"100%",cursor:'pointer'}} />
               </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} sx={{display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>
             <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <Typography sx={{fontSize:"14px",color:'white',fontWeight:"600",cursor:"pointer",'&:hover':{color:"#007bff"}}} onClick={()=>{router.push('/')}}>
                    Home
                </Typography>
                <Typography sx={{fontSize:"14px",color:'white',fontWeight:"600",cursor:"pointer",'&:hover':{color:"#007bff"}}}  onClick={()=>{router.push('/about')}}>
                    About
                </Typography>
                <Typography sx={{fontSize:"14px",color:'white',fontWeight:"600",cursor:"pointer",'&:hover':{color:"#007bff"}}}   onClick={()=>{router.push('/work')}}>
                    Work
                </Typography>
                <Typography sx={{fontSize:"14px",color:'white',fontWeight:"600",cursor:"pointer",'&:hover':{color:"#007bff"}}} onClick={()=>{router.push('/contactus')}}>
                    Contact
                </Typography>
               
             </Box>
            </Grid>
            {/* <Grid item xs={8} sm={8} md={3} lg={3} sx={{display:"flex",justifyContent:"right",alignItems:"center"}}>
                 <Button variant='contained' sx={{display:"flex",mr:"15px",bgcolor:"#007bff",'&:hover':{bgcolor:"#007bff"},fontSize:{lg:"12px",md:"12px",sm:"10px",xs:"10px"},alignItems:"center",justifyContent:"center",p:"5px 5px 5px 5px"}} onClick={loginHandler}>
                    <Person2OutlinedIcon sx={{fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"13px"},mt:"-2px"}}/>Login
                 </Button>
                 <Button variant='contained' sx={{display:"flex",bgcolor:"#4caf50",'&:hover':{bgcolor:"#4caf50"},mr:"10px",fontSize:{lg:"12px",md:"12px",sm:"10px",xs:"10px"},alignItems:"center",justifyContent:"center",p:"5px 5px 5px 5px"}} onClick={signupHandler}>
                    <Person2OutlinedIcon sx={{fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"13px"},mt:"-2px"}}/>SignUp
                 </Button>
            </Grid>
                    <Grid item xs={1.5} sx={{ display:{lg:"flex",md:"flex",sm:"none",xs:"none"}, justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
                        <Typography sx={{  cursor: "pointer", userSelect: "none", mr: "15px" }} onClick={handleNavigate}>Services</Typography>
                        <IconButton sx={{ mr: "15px", p: "0px" }} onClick={handleNavigateProfile}>
                            <AccountCircleIcon sx={{fontSize: "40px" }} />
                        </IconButton>
                    </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderDrawer;