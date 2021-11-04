import episodes from "../episodes.json"; //episode data import
import Episode from "./Episode"; // Episode component format
import "./Main.css";
import React from "react";

export default function MainContent(): JSX.Element {
  return (
    <div className="episode">
      {episodes.map((ep) => (
        <React.Fragment key={ep.id}>
          <Episode
            id={ep.id}
            url={ep.url}
            name={ep.name}
            season={ep.season}
            number={ep.number}
            type={ep.type}
            airdate={ep.airdate}
            airtime={ep.airtime}
            airstamp={ep.airstamp}
            runtime={ep.runtime}
            rating={ep.rating}
            image={ep.image}
            summary={ep.summary}
            _links={ep._links}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
