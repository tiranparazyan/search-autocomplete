import { AccessTime, Close, Delete, Mic } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  saveSearchTerm,
  clearSearchTerm,
  findResults,
} from "../SearchPage/searchSlice";
import {
  addToHistory,
  removeFromHistory,
  searchByTyping,
} from "./autocompleteSlice";
import { SearchProps } from "../../DB/db";

const Search: React.FC<{ hideButtons: boolean }> = ({ hideButtons }) => {
  const history = useAppSelector((value) => value.history);
  const searchHistoryList = useAppSelector(
    (value) => value.autocomplete.searchArray
  );
  const typingSearchList = useAppSelector(
    (value) => value.autocomplete.searchWhileTypingList
  );
  const dispatch = useAppDispatch();

  const [input, setInput] = useState(history.searchTerm);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowAutocomplete(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    dispatch(searchByTyping(event.target.value));
  };

  const handleFocus = () => {
    setShowAutocomplete(true);
  };

  const handleClear = () => {
    dispatch(clearSearchTerm());

    setInput("");
    inputRef.current?.focus();
  };

  const handleDelete = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    item: string
  ) => {
    e.stopPropagation();
    if (input === item) {
      setInput("");
    }
    const searchHistory = localStorage.getItem("searchHistory");
    const localSearchResults: SearchProps[] = searchHistory
      ? JSON.parse(searchHistory)
      : [];

    const resultToSave = localSearchResults.filter(({ text }) => text !== item);

    localStorage.setItem("searchHistory", JSON.stringify(resultToSave));

    dispatch(removeFromHistory(item));
    inputRef.current?.focus();
  };

  const handleElementClick = async (element: string) => {
    setInput(element);
    dispatch(searchByTyping(element));
    search(element);
  };

  const search = (element?: string) => {
    const searchHistory = localStorage.getItem("searchHistory");
    const localSearchResults: SearchProps[] = searchHistory
      ? JSON.parse(searchHistory)
      : [];

    if (
      !localSearchResults.some(
        (item) => item.text.toLowerCase() === input.toLowerCase()
      ) &&
      !element
    ) {
      if (!searchHistoryList.some(({ text }) => text === input)) {
        localSearchResults.unshift({ text: input, location: "localStorage" });
        dispatch(addToHistory(input));
      }

      dispatch(saveSearchTerm(input));
      dispatch(findResults(input));
    }

    if (
      !searchHistoryList.some(
        (item) => item.text.toLowerCase() === input.toLowerCase()
      ) &&
      element
    ) {
      if (!localSearchResults.some(({ text }) => text === element)) {
        dispatch(addToHistory(element));
        localSearchResults.unshift({ text: element, location: "localStorage" });
      }
    }

    if (element) {
      dispatch(addToHistory(element));
      dispatch(saveSearchTerm(element));
      dispatch(findResults(element));
    }

    localStorage.setItem("searchHistory", JSON.stringify(localSearchResults));

    if (!hideButtons) {
      navigate("/search");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search();
  };

  const renderAutoComplete = () => {
    return (
      <ul className={styles.autocomplete}>
        {(input ? typingSearchList : searchHistoryList).map(
          ({ text, location }) => (
            <li
              key={text}
              className={styles.autocompleteItem}
              onClick={() => handleElementClick(text)}
            >
              {location === "db" ? (
                <SearchIcon className={styles.autocompleteIcon} />
              ) : (
                <AccessTime className={styles.autocompleteIcon} />
              )}
              <p
                className={`${styles.autocompleteText} ${
                  location === "localStorage" ? styles.searched : ""
                }`}
              >
                {text}
              </p>
              {location === "localStorage" && (
                <Delete onClick={(e) => handleDelete(e, text)} />
              )}
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <div
          className={`${styles.input} ${
            showAutocomplete ? styles.inputFocused : ""
          }`}
        >
          <SearchIcon className={styles.inputIcon} />
          <input
            value={input}
            onChange={handleChange}
            onClick={() => {
              if (input) {
                search(input);
                dispatch(searchByTyping(input));
              }
            }}
            ref={inputRef}
            onFocus={handleFocus}
          />
          {input && (
            <Close className={styles.clear} onClick={() => handleClear()} />
          )}
          <Mic />
        </div>
        {showAutocomplete && renderAutoComplete()}
      </div>
      {!hideButtons ? (
        <div className={styles.buttons}>
          <Button type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className={styles.buttons}>
          <Button
            type="submit"
            variant="outlined"
            className={styles.buttonsHidden}
          >
            Google Search
          </Button>
          <Button
            variant="outlined"
            className={styles.buttonsHidden}
            disabled={true}
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
