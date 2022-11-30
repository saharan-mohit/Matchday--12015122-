import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import MatchesView from "../MatchesView";
import { BsSearch } from "react-icons/bs";
import "./HomePage.css";

const HomePage = () => {
  const [fixtures, setFixtures] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef();

  const filterData = useMemo(() => {
    return fixtures.filter((data) => {
      return (
        data.team1[0].name.toLowerCase().includes(query.toLowerCase()) ||
        data.team2[0].name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, fixtures]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    for (let i = 0; i < 10; i++) {
      axios
        .get(
          `http://matchday.ai/referee/champ/fixture/dummy-matches?page=${i}`,
          { cancelToken: cancelToken.token }
        )
        .then((res) => {
          setFixtures((prev) => [...prev, ...res.data.fixtures]);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("req cancel");
          } else {
            console.log("req performed");
          }
        });
    }

    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <div>
      <div className="home-head">International Matches</div>
      <div className="search-box">
        <div className="search-btn">
          {" "}
          <BsSearch />
        </div>
        <input
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          className="searchBar"
          placeholder="Search for Matches and then click on search"
        />
      </div>
      <div>{<MatchesView matchData={filterData} />}</div>
    </div>
  );
};

export default HomePage;
