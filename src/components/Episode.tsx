import { EpisodeProps } from "../EpisodeProps";

export default function episode(props: EpisodeProps): JSX.Element {
  const season = props.season.toString().padStart(2, "0");
  const episode = props.number.toString().padStart(2, "0");
  const cleanedSummary = props.summary
    .replace("<p>", "")
    .replace("</p>", "")
    .replace("<p></p>", "");

  return (
    <div key={props.id}>
      <h2>
        <strong>
          {props.name} - S{season}E{episode}
        </strong>
      </h2>
      <img src={props.image.medium} alt="still from the episode" />
      <p>{cleanedSummary}</p>
    </div>
  );
}
