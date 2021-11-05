import episodes from "../episodes.json"; //episode data import
import Episode from "./Episode"; // Episode component format
import "./Main.css";
import React, { useState } from "react";
import { EpisodeProps } from "../EpisodeProps";
import { DropDown } from "./DropDown";
import { isPropertySignature } from "typescript";

export default function MainContent(props: EpisodeProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes: EpisodeProps[] = episodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <DropDown
        key={props.id}
        name={props.name}
        season={props.season}
        number={props.number}
      />
      <input
        placeholder="Search for an episode..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      Current search term: {searchTerm} <br></br>
      <br></br>
      Showing {filteredEpisodes.length} result(s) of {episodes.length} episodes.
      <div className="episode">
        {filteredEpisodes.map((ep) => (
          <Episode
            key={ep.id}
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
        ))}
      </div>
    </>
  );
}
