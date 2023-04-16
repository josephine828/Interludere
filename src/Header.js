import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <h1 id="logo">Interludere</h1>
        <div id="tabsContainer">
            <a id="homeTab">home</a>
            <a id="gamesTab">games</a>
            <div id="settingsTab">settings</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
