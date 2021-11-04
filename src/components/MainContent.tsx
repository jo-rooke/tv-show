import episodes from "../episodes.json"; //episode data import
import Episode from "./Episode"; // Episode component format
import "./Main.css";
import React, { useState } from "react";
import { EpisodeProps } from "../EpisodeProps";

export default function MainContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes: EpisodeProps[] = episodes.filter(
    (episode) =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search for an episode..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      Current search term: {searchTerm} <br></br>
      <br></br>
      Showing {filteredEpisodes.length} result(s) of {episodes.length} episodes.
      <div className="episode">
        {filteredEpisodes.map((ep) => (
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
    </>
  );
}
