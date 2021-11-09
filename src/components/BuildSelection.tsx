interface BuildSelectionProps {
  season: number;
  number: number;
  name: string;
}

export default function BuildSelection(
  props: BuildSelectionProps
): JSX.Element {
  const seasonFormat = props.season.toString().padStart(2, "0");
  const episodeFormat = props.number.toString().padStart(2, "0");
  return (
    <>
      {props.name} - S{seasonFormat}E{episodeFormat}
    </>
  );
}
