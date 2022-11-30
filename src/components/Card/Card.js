import React, { useEffect, useState } from "react";
import "./Card.css";
const Card = ({
  round,
  team1,
  team2,
  sca1,
  sca2,
  sca3,
  scb1,
  scb2,
  scb3,
  winner,
}) => {
  const [loser1, setLoser1] = useState("");
  const [loser2, setLoser2] = useState("");

  useEffect(() => {
    const findLoser = () => {
      if (winner === team1) {
        setLoser2("loser");
      } else {
        setLoser1("loser");
      }
    };
    findLoser();
  }, [team1, winner]);

  return (
    <div className="card">
      <div className="card-head">
        <div className="main">
          All India Senior Ranking Badminton Tournament
        </div>
        <div className="sub-main">{round}</div>
      </div>
      <div className="card-body">
        <div className="team">
          <div>
            <img
              src={`https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T070329Z&X-Amz-Expires=86400&X-Amz-Signature=e315e10533b1390c2bb2b1ac9a8b99eb941eb56106de31050b27645acce38d60&X-Amz-SignedHeaders=host&x-id=GetObject`}
              className={`winner ${loser1}`}
              alt="winner"
            />
          </div>
          <img
            className="team-img"
            src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg`}
            alt="team_1"
          />
          <div className="team-mem">{team1}</div>
        </div>
        <div className="team-mid">
          <div className="versus">v/s</div>
          <div className="team-playoffs">{`${sca1}-${scb1} , ${sca2}-${scb2}, ${sca3}-${scb3}`}</div>
        </div>
        <div className="team">
          <div>
            <img
              src={`https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T070329Z&X-Amz-Expires=86400&X-Amz-Signature=e315e10533b1390c2bb2b1ac9a8b99eb941eb56106de31050b27645acce38d60&X-Amz-SignedHeaders=host&x-id=GetObject`}
              className={`winner ${loser2}`}
              alt="winner"
            />
          </div>
          <img
            className="team-img"
            src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg`}
            alt="team_2"
          />
          <div className="team-mem">{team2}</div>
        </div>
      </div>
      <div className="card-foot">
        <img
          src={`https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T070606Z&X-Amz-Expires=86400&X-Amz-Signature=63904dfbd909a00b078af687f5e7b5f329f3edc7005a95d526b87d074611b426&X-Amz-SignedHeaders=host&x-id=GetObject`}
          alt="champ"
        />
      </div>
    </div>
  );
};

export default Card;
