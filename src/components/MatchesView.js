import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

const MatchesView = ({ matchData }) => {
  return (
    <div className="matches-cards">
      {matchData.map((match) => {
        return (
          <Link to="/video" key={match._id} style={{ textDecoration: 'none' }}>
            <Card
              key={match._id}
              round={match.round}
              team1={match.team1[0].name}
              team2={match.team2[0].name}
              sca1={match.a1}
              sca2={match.a2}
              sca3={match.a3}
              scb1={match.b1}
              scb2={match.b2}
              scb3={match.b3}
              winner={match.winner}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MatchesView;
