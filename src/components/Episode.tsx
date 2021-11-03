interface EpisodeProps {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export default function episode(props: EpisodeProps): JSX.Element {
  const season = props.season.toString().padStart(2, "0");
  const episode = props.number.toString().padStart(2, "0");
  const cleanedSummary = props.summary.replace("<p>", "").replace("</p>", "");

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
