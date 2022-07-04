import * as React from "react";
import { useState, useEffect } from "react";
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
import "../fonts/fonts.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "../cart/styles.css";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../FirebaseProvider";
import { ButtonGroup, Dropdown, FormControl, Nav } from "react-bootstrap";
import { Badge } from "@mui/material";
import { CartState } from "../context/CartProvider";
import {
  ImClipboard,
  ImExit,
  ImInfo,
  ImQuestion,
  ImSpoonKnife,
  ImTruck,
  ImUser,
  ImUsers,
} from "react-icons/im";
import { usePendings } from "../restaurant/RestoOrdersViewPendingContext";

const pages = ["Order History"];

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [restoId, setRestoId] = useState(null);
  const a = "ID";

  const { numPending } = usePendings();

  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
    itemDispatch,
  } = CartState();

  const { user, getUserProfile } = useUserAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getuserData = async () => {
      try {
        const info = await getUserProfile();
        console.log("info ", info);
        setUserInfo(info);
      } catch (e) {
        console.log("error", e.message);
      }
    };
    getuserData();
  }, [user]);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      setCurrentUser(currentUser);

      // ...
    } else {
      setCurrentUser(null);
    }
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUserInfo(null);
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
  const driver = userInfo?.role.includes("Driver");
  console.log("is Driver?", driver);
  console.log("numPending is", numPending);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          bgcolor: "#342628",
          padding: "0px, 0px, 0px, 0px",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
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
                CHEF-HIRE
              </Typography>
            </Link>

            {user && (
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              </Box>
            )}
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
              CHEF-HIRE
            </Typography>
            {currentUser && (
              <Box
                sx={{
                  paddingLeft: "300px",
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <>
                    <Nav>
                      <FormControl
                        style={{ width: 300 }}
                        type="search"
                        placeholder="Search..."
                        className="m-auto"
                        aria-label="Search"
                        onChange={(e) => {
                          itemDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,
                          });
                        }}
                      />{" "}
                      <Dropdown style={{ padding: "15px" }}>
                        <Dropdown.Toggle
                          style={{
                            backgroundColor: "#feaa00",
                            borderColor: "#feaa00",
                          }}
                          focus={{ boxShadow: "0 0 0 0.25rem #f7f4ef" }}
                        >
                          <FaShoppingCart color="white" fontSize="25px" />
                          <Badge>&nbsp;{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{
                            minwidth: 370,
                            alignContent: "center",
                            minWidth: "20rem",
                          }}
                        >
                          {cart.length > 0 ? (
                            <>
                              {cart.map((item) => (
                                <span className="cartitem" key={item.name}>
                                  <img
                                    src={item.menuphoto}
                                    className="cartItemImg"
                                    alt={item.name}
                                  />
                                  <div className="cartItemDetail">
                                    <span>{item.name}</span>
                                    <span>$ {item.price}</span>
                                  </div>
                                  <AiFillDelete
                                    fontSize="20px"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: item,
                                      })
                                    }
                                  />
                                </span>
                              ))}
                              <div className="goToCartButton">
                                <Link
                                  to={`/cart/${a}`}
                                  style={{
                                    textDecoration: "none",
                                    alignContent: "center",
                                    backgroundColor: "feaa00",
                                  }}
                                >
                                  <Button style={{ margin: "0 10px" }}>
                                    Go To Cart
                                  </Button>
                                </Link>
                              </div>
                            </>
                          ) : (
                            <span>Cart is Empty</span>
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav>
                  </>
                ))}
              </Box>
            )}

            {currentUser && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Badge color="secondary" badgeContent={numPending}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{ backgroundColor: "#feaa00", color: "#342628" }}
                        alt={userInfo?.firstName}
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Badge>
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
                    <ImUser style={{ margin: "10px" }} /> Profile
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/order-history"
                    onClick={handleCloseUserMenu}
                  >
                    <ImClipboard style={{ margin: "10px" }} />
                    Order History
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/need-help"
                    onClick={handleCloseUserMenu}
                  >
                    <ImQuestion style={{ margin: "10px" }} />
                    Need Help?
                  </MenuItem>
                  {userInfo?.role.includes("Business") == true && (
                    <MenuItem
                      component={Link}
                      to="/restaurant/dashboard"
                      onClick={handleCloseUserMenu}
                    >
                      <ImSpoonKnife style={{ margin: "10px" }} />
                      Restaurant Dashboard{" "}
                    </MenuItem>
                  )}
                  {userInfo?.role.includes("Driver") == true && (
                    <MenuItem
                      component={Link}
                      to="/driver"
                      onClick={handleCloseUserMenu}
                    >
                      <ImTruck style={{ margin: "10px" }} />
                      Driver Dashboard
                    </MenuItem>
                  )}
                  {userInfo?.role.includes("Admin") == true && (
                    <MenuItem
                      component={Link}
                      to="/admin"
                      onClick={handleCloseUserMenu}
                    >
                      <ImUsers style={{ margin: "10px" }} />
                      Admin Dashboard
                    </MenuItem>
                  )}

                  <MenuItem
                    component={Link}
                    to="/profile"
                    onClick={handleLogout}
                  >
                    <ImExit style={{ margin: "10px" }} />
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}

            {!currentUser && (
              <>
                <FormControl
                  style={{ width: 300 }}
                  type="search"
                  placeholder="Search..."
                  className="m-auto"
                  aria-label="Search"
                  onChange={(e) => {
                    itemDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    });
                  }}
                />
                <Button
                  href="/signin"
                  style={{
                    fontSize: "22px",
                    fontFamily: titleFont,
                    color: "white",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  href="/signup"
                  style={{
                    fontSize: "22px",
                    backgroundColor: "#feaa00",
                    borderRadius: "50px",
                    padding: "3px 8px",
                    fontFamily: titleFont,
                    color: "#342628",
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

//{/* CART
// <div>
//   {/* <Button><a href="/shopping-cart">CART</a></Button> */}
//   <Dropdown alignright>
//     <Dropdown.Toggle>
//       <Badge>{0}</Badge>
//     </Dropdown.Toggle>
//     <Dropdown.Menu style={{ minwidth: 370 }}>
//       <span>Cart is Empty</span>
//     </Dropdown.Menu>
//   </Dropdown>
// </div>
