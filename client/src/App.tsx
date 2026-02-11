import "./index.css";

export default function App() {
  return (
    <>
      <header>
        <div className="logo">
          <span>JB</span>
          Johnny Bravo
        </div>

        <button className="header-btn">X COMMUNITY ↗</button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>
            WHOA<br />
            MAMA!
          </h1>

          <div className="subtitle">
            The one and only site for the man, the myth, the pompadour!
          </div>

          <div className="buttons">
            <button className="primary">TALK TO ME, BABY!</button>
            <button>CHECK THE PECS</button>
            <button>ABOUT</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="/johnny-hero.png" alt="Johnny Bravo" />
          <img className="coin" src="/johnny-coin.png" alt="Johnny Coin" />
        </div>
      </section>
    </>
  );
}
