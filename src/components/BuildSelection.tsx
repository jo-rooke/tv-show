import formatNum from "../utils/formatNumber";
interface BuildSelectionProps {
  season: number;
  number: number;
  name: string;
}

export default function BuildSelection(
  props: BuildSelectionProps
): JSX.Element {
  const seasonFormat = formatNum(props.season);
  const episodeFormat = formatNum(props.number);
  return (
    <>
      S{seasonFormat} E{episodeFormat} - {props.name}
    </>
  );
}
