import BuildSelection from "./BuildSelection";

interface SpecificProps {
  season: number;
  number: number;
  name: string;
  summary: string;
  id: number;
  image: {
    medium: string;
  };
}

export default function episode(props: SpecificProps): JSX.Element {
  const cleanedSummary = props.summary
    .replace("<p>", "")
    .replace("</p>", "")
    .replace("<p></p>", "");

  return (
    <div key={props.id}>
      <h2>
        <strong>
          <BuildSelection
            key={props.name}
            season={props.season}
            number={props.number}
            name={props.name}
          />
        </strong>
      </h2>
      <img
        src={
          props.image
            ? props.image.medium
            : "https://i.insider.com/5cad1b8702d9a10279396b54?width=700"
        }
        alt={
          props.image
            ? "still from the episode"
            : "No image available: GoT stock logo"
        }
      />
      <p>{cleanedSummary}</p>
    </div>
  );
}
