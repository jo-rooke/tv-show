import NavBar from "./NavBar";

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <h1>
        <strong>Game of Thrones</strong>
      </h1>
      <p>
        {" "}
        <em>Your go-to episode archive for all things GoT</em>
      </p>
      <NavBar />
    </div>
  );
}
