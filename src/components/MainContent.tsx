import episodes from "../episodes.json"; //episode data import
import Episode from "./Episode"; // Episode component format
import "./Main.css";
import { EpisodeProps } from "../EpisodeProps";
import { useState } from "react";
import BuildSelection from "./BuildSelection";
import formatNum from "../utils/formatNumber";

export default function MainContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<string>("");

  const filteredEpisodes: EpisodeProps[] = episodes.filter((episode) => {
    if (selected !== "") {
      return episode.name.includes(selected);
    } else if (searchTerm !== "") {
      return (
        episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (selected === "") {
      // show all the episodes
      return episode.name.includes(episode.name);
    } else {
      return false;
    }
  });

  console.log(selected);
  function DropDown(): JSX.Element {
    console.log(BuildSelection);
    return (
      <>
        <select onChange={(e) => setSelected(e.target.value)}>
          <option value="">Select an episode...</option>
          {episodes.map((ep) => (
            <option key={ep.name} value={ep.name}>
              {`S${formatNum(ep.season)} E${formatNum(ep.number)} - ${ep.name}`}
            </option>
          ))}
        </select>
        <br />
      </>
    );
  }

  return (
    <>
      <DropDown />
      <input
        placeholder="Search for an episode..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      Current search term: {searchTerm} <br></br> <br></br>
      <button
        type="button"
        onClick={() => {
          setSelected("");
          setSearchTerm("");
        }}
      >
        Show all episodes
      </button>
      <br></br>
      <br></br>
      Showing {filteredEpisodes.length} result(s) of {episodes.length} episodes.
      <div className="episode">
        {filteredEpisodes.map((ep) => (
          <Episode
            key={ep.name}
            name={ep.name}
            season={ep.season}
            number={ep.number}
            image={ep.image}
            summary={ep.summary}
            id={ep.id}
          />
        ))}
      </div>
    </>
  );
}
