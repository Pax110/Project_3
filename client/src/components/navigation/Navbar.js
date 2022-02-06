import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";

import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";

import { Link } from "react-router-dom";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../FirebaseProvider";
import { Dropdown } from "react-bootstrap";
import { Badge } from "@mui/material";
const pages = ["Order History"];
// const settings = ["Profile", "Order History", "Need Help?", "Logout"];

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const {user} = useUserAuth()
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      setCurrentUser(currentUser);
      console.log("user is",user)
      // ...
    } else {
      setCurrentUser(null);
    }
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const titleFont = "'Bebas Neue'";

  return (
    <AppBar position="static" sx={{ bgcolor: "#342628" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: titleFont,
            }}
          >
            CULINARY COLLECTIVE
          </Typography>

          {user && <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}

                  <MenuItem
                    component={Link}
                    to="/profile"
                    onClick={handleCloseUserMenu}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/order-history"
                    onClick={handleCloseUserMenu}
                  >
                    Order History
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/need-help"
                    onClick={handleCloseUserMenu}
                  >
                    Need Help?
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/profile"
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: titleFont,
            }}
          >
            CULINARY COLLECTIVE
          </Typography>
          {currentUser && (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}

   
          {currentUser && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user?.displayname}
                     src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}

                <MenuItem
                  component={Link}
                
                  to="/profile"
                  onClick={handleCloseUserMenu}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/order-history"
                  onClick={handleCloseUserMenu}
                >
                  Order History
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/need-help"
                  onClick={handleCloseUserMenu}
                >
                  Need Help?
                </MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
          {/* {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button href="/signin">Signin</Button>
          )}

          {user && <Link to="/profile">Profile </Link>}
          {user && <Link to="/need-help"> NeedHelp?</Link>}
          {user && <Link to="/order-history">OrderHistory</Link>} */}
          {currentUser && (
            <Button>
              {" "}
              <Link to="/restaurant/dashboard">RestoDash</Link>{" "}
            </Button>
          )}

          {currentUser && (
            <Button>
              {" "}
              <Link to="/admin">Admin</Link>{" "}
            </Button>
          )}




          {/* CART */}
            { 
            <div>
              {/* <Button><a href="/shopping-cart">CART</a></Button> */}
              <Dropdown alignright>
                <Dropdown.Toggle>
                  <Badge>{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minwidth: 370}}>
                  <span>Cart is Empty</span>
                </Dropdown.Menu>

              </Dropdown>
            </div>
          }









          {/* SIGNIN BUTTON */}

          {!currentUser && <Button href="/signin">Signin</Button>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
