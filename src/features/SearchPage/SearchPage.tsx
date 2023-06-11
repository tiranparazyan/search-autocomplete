import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./SearchPage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {
  Image,
  LocalOffer,
  MoreVert,
  Room,
  Description,
} from "@mui/icons-material";
import Search from "../Search/Search";
import { Typography } from "@mui/material";
import { clearSearchTerm } from "./searchSlice";

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { foundResults, searchTerm, searchDuration } = useAppSelector(
    (value) => value.history
  );

  const handleLogoClick = () => {
    dispatch(clearSearchTerm());
    navigate("/");
  };

  return (
    <div>
      <div className={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt=""
          className={styles.logo}
          onClick={() => handleLogoClick()}
        />
        <div className={styles.headerBody}>
          <Search hideButtons />
          <div className={styles.options}>
            <div className={styles.optionsLeft}>
              <div className={styles.option}>
                <SearchIcon />
                <Typography>All</Typography>
              </div>
              <div className={styles.option}>
                <Description />
                <Typography>News</Typography>
              </div>
              <div className={styles.option}>
                <Image />
                <Typography>Images</Typography>
              </div>
              <div className={styles.option}>
                <LocalOffer />
                <Typography>Shopping</Typography>
              </div>
              <div className={styles.option}>
                <Room />
                <Typography>Maps</Typography>
              </div>
              <div className={styles.option}>
                <MoreVert />
                <Typography>More</Typography>
              </div>
            </div>

            <div className={styles.optionsRight}>
              <div className={styles.option}>
                <Typography>Settings</Typography>
              </div>
              <div className={styles.option}>
                <Typography>Tools</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.results}>
        <p className={styles.resultCount}>
          About {foundResults.length} results ({searchDuration} seconds) for{" "}
          {searchTerm}
        </p>
        {foundResults.map((item) => {
          return (
            <div className={styles.result} key={Math.random()}>
              <a href={item.link} target="blank">
                {item.title}
              </a>
              <p className={styles.resultSnippet}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
