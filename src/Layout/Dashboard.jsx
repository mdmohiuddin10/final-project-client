import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListItem from '@mui/material/ListItem';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import VerifiedIcon from '@mui/icons-material/Verified';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { Grid } from '@mui/material';

const drawerWidth = 240;

const Dashboard = (props) => {
  const [isAdmin] = useAdmin()
  // console.log('from dashboard', user);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Grid sx={{backgroundColor: '#fff', fontWeight: '700', height: '100%'}}>
      <Toolbar />
      <Divider />
      {
        isAdmin ? <List>
          {[
            { text: 'Admin Dashboard', icon: <AdminPanelSettingsIcon />, path: '/dashboard/admin home' },
            { text: 'Manage Users', icon: <GroupIcon sx={{color: '#0B0223'}} />, path: '/dashboard/manage users' },
            { text: 'Approved Premium', icon: <VerifiedIcon />, path: '/dashboard/approve' },
            { text: 'Approved Contact Request', icon: <ContactPhoneIcon />, path: '/dashboard/Approve request contact' },
            { text: 'success story', icon: <ContactPhoneIcon />, path: '/dashboard/success story' },
            { text: ' Logout', icon: <LogoutIcon />, path: '' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          : <List>
            {[
              { text: 'Edit Biodata', icon: <EditIcon />, path: '/dashboard/edit data' },
              { text: 'View Biodata', icon: <VisibilityIcon />, path: '/dashboard/view data' },
              { text: 'My Contact Request', icon: <PermContactCalendarIcon />, path: '/dashboard/contact Request' },
              { text: 'Favourites Biodata', icon: <FavoriteIcon />, path: '/dashboard/favourite data' },
              { text: 'Got Married', icon: <CheckCircleIcon />, path: '/dashboard/Got Married' },
              { text: ' Logout', icon: <LogoutIcon />, path: '' },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      }
      <Divider />
      <List>
        {[
          { text: 'Home', icon: <InboxIcon />, path: '/' },
          { text: 'About Us', icon: <MailIcon />, path: '/about' },
          { text: 'Contact', icon: <InboxIcon />, path: '/contact' },
          { text: 'Manage Users', icon: <MailIcon />, path: '/dashboard/manage-users' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Outlet></Outlet>
      </Box>
    </Box>
  );
}



export default Dashboard;

