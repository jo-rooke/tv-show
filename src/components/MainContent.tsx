import episodes from "../episodes.json"; //episode data import
import Episode from "./Episode"; // Episode component format
import "./Main.css";
import { EpisodeProps } from "../EpisodeProps";
import { useState } from "react";
import BuildSelection from "./BuildSelection";

export default function MainContent(props: EpisodeProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("");

  const filteredEpisodes: EpisodeProps[] = episodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      selected
    );
  });

  function DropDown(props: EpisodeProps): JSX.Element {
    return (
      <>
        <select onChange={(e) => setSelected(e.target.value)}>
          <label>Select an episode:</label>
          {episodes.map((ep) => (
            <option key={ep.id} value={ep.name}>
              <BuildSelection
                key={props.name}
                id={props.id}
                season={props.season}
                number={props.number}
                image={props.image}
                name={props.name}
                summary={props.name}
              />
            </option>
          ))}
        </select>
      </>
    );
  }

  return (
    <>
      <DropDown
        key={props.id}
        id={props.id}
        name={props.name}
        season={props.season}
        number={props.number}
        image={props.image}
        summary={props.summary}
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
            name={ep.name}
            season={ep.season}
            number={ep.number}
            image={ep.image}
            summary={ep.summary}
          />
        ))}
      </div>
    </>
  );
}
