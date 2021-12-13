import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
