import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "lightblue",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
}));


export default function Header() {
  const { header } = useStyles();
  const displayDesktop = () => {
    return <Toolbar>{PersonalSunriseNCLogo}</Toolbar>;
  };

  const PersonalSunriseNCLogo = (
    <Typography variant="h6" component="h1">
      Personal Sunrise NC
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
