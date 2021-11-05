import { EpisodeProps } from "../EpisodeProps";
import episodes from "../episodes.json";
import BuildSelection from "./BuildSelection";

// interface DropDownProps {
//   season: number;
//   number: number;
//   name: string;
// }

export function DropDown(props: EpisodeProps): JSX.Element {
  return (
    <>
      <select>
        <label>Select an episode:</label>
        {episodes.map((ep) => (
          <option key={ep.id} value={ep.name}>
            <BuildSelection
              key={props.name}
              season={props.season}
              number={props.number}
              name={props.name}
            />
          </option>
        ))}
      </select>
    </>
  );
}
