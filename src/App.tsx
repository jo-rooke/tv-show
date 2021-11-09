import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  // console.log(`Imported ${episodes.length} episode(s)`);
  // console.log(`First episode's name is ${episodes[0].name}`);

  return (
    <>
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
