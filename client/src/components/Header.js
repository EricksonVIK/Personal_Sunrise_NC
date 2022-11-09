import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom"

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "lightblue",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
}));


const headersData = [
  {
    label: "Calander",
    href: "/calander",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];
export default function Header() {
  const { header, logo, menuButton } = useStyles();
  const displayDesktop = () => {
    return(
      <Toolbar className="{toobar}">
        Personal Sunrise NC
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const PersonalSunriseNCLogo = (
    <Typography variant="h6" component="h1" className="{logo}">
      Personal Sunrise NC
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };


  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
