import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import ROUTES from "../../../../routes/routesModel";
import MenuLink from "../../../../routes/components/MenuLink";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchBar from "../right-navigation/SearchBar";
import { useNavigate } from "react-router-dom";


const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();
  const {isDark,toggleDarkMode} =useTheme()
  const navigate = useNavigate()

  const onLogout = () => {
    handleLogout();
    onClose();
    navigate(ROUTES.CARDS)
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}>

      <Box>
      
        <Box sx={{ m: 1 ,display: {md:"none"},width:"70%"}}>
          <SearchBar/>
        </Box>
        {user && user.isAdmin &&<MenuLink
              text="CRM Panel"
              title="CRM Panel"
              navigateTo={ROUTES.CRM_PANEL}
              onClick={onClose} 
            />}
       {user && <MenuLink
          text="about"
          title="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", sm: "none" }}}
        />}
        
        {!user && (
          <Box>
         
            <MenuLink
              text="login"
              title="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{display: { xs: "block", md: "none" } }}
              
            />
            <MenuLink
              text="signup"
              title="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </Box>
        )}
        {user && (
          <Box>
            <MenuLink
              text="profile"
              title='profile'
              navigateTo={ROUTES.USER_PROFILE}
              onClick={onClose}
            />
            <MenuLink
              text="edit account"
              title="edit account"
              navigateTo={ROUTES.EDIT_USER}
              onClick={onClose} 
            />
            
            <MenuItem onClick={onLogout} title="logout">Logout</MenuItem>
          </Box>
        )}
        <IconButton  
          onClick={toggleDarkMode} 
          sx={{display: {xs:"inline-flex" ,md:"none"},ml:1}}
          title={isDark ? 'light mode' : 'dark mode'}>
         {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </MuiMenu>
  );
};

export default Menu;