import React from "react";
import styles from "./Home.module.css";
import { Avatar } from "@mui/material";
import { Apps } from "@mui/icons-material";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.headerRight}>
          <a href="https://mail.google.com/">Gmail</a>
          <Apps />
          <Avatar />
        </div>
      </div>

      <div className={styles.body}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt=""
        />
        <Search hideButtons={false} />
      </div>
    </div>
  );
};

export default Home;
