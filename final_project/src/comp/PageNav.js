import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import {NavLink} from 'react-router-dom';
const PageNav = () => {
    return (
    <>
       <Box sx={{flexGrow:1}}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        EShop
                    </Typography>
                    <Button component={NavLink} to='/' style={({ isActive }) => 
                    { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} 
                    sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

                    
                    
                    <Button component={NavLink} to='/orderhistory' style={({ isActive }) => 
                    { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} 
                    sx={{ color: 'white', textTransform: 'none' }}>Order History</Button>

                    <Button component={NavLink} to='/order' style={({ isActive }) => 
                    { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} 
                    sx={{ color: 'white', textTransform: 'none' }}>Order </Button>

                    <Button component={NavLink} to='/contact' style={({ isActive }) => 
                    { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} 
                    sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

                    <Button component={NavLink} to='/review' style={({ isActive }) => 
                    { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} 
                    sx={{ color: 'white', textTransform: 'none' }}>Review</Button>

                    <Button component={NavLink} to='/loginreg' style={({ isActive }) => 
                    { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} 
                    sx={{ color: 'white', textTransform: 'none' }}>Login</Button>

                    

                </Toolbar>


            </AppBar>
       </Box>
    </>
    );
};

export default PageNav;
