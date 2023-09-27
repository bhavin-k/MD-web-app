import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import UserIcon from '@mui/icons-material/Person4Outlined';
import { drawerWidth, navItems } from '../../utils/mock-data';
import { categroiesName, companyName } from './navbarStyle';
interface Props {
  window?: () => Window;
}

const NavBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SHOP BAZZAR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', fontFamily: 'Helvetica Now Text' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none' }}>
        <Toolbar
          sx={{
            color: '#000000',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            mx: { lg: '71px', sm: '18px' },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="div"
              className={companyName}
              sx={{ flexGrow: 1, display: { sm: 'flex' }, cursor: 'pointer' }}
            >
              SHOP BAZZAR
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                className={categroiesName}
                sx={{
                  color: '#000000',
                  fontFamily: 'Helvetica Now Text',
                  ':hover': { textDecoration: 'underLine' },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }}>
            <SearchIcon sx={{ mr: 2 }} />
            <ShoppingCartOutlinedIcon sx={{ mr: 2 }} />
            <Box sx={{ display: { xs: 'none', sm: 'block', lg: 'flex' }, alignItems: 'center' }}>
              <UserIcon sx={{ mr: 2 }} />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none', md: 'flex', lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
