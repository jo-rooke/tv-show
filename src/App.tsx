import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { EpisodeProps } from "./EpisodeProps";
import NavBar from "./components/NavBar";

function App(props: EpisodeProps): JSX.Element {
  // console.log(`Imported ${episodes.length} episode(s)`);
  // console.log(`First episode's name is ${episodes[0].name}`);

  return (
    <>
      <Header />
      <NavBar />
      <MainContent
        id={props.id}
        season={props.season}
        number={props.number}
        image={props.image}
        name={props.name}
        summary={props.name}
      />
      <Footer />
    </>
  );
}

export default App;
