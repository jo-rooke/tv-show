import { EpisodeProps } from "../EpisodeProps";
export default function BuildSelection({
  season,
  number,
  name,
}: EpisodeProps): JSX.Element {
  const seasonFormat = season.toString().padStart(2, "0");
  const episodeFormat = number.toString().padStart(2, "0");
  return (
    <>
      {name} - S{seasonFormat}E{episodeFormat}
    </>
  );
}
