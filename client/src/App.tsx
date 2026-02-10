import johnnyImg from "./assets/johnny-bravo.png";


export default function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">WHOA<br />MAMA!</h1>

          <p className="hero-sub">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">TALK TO ME, BABY!</button>
            <button className="btn btn-outline">CHECK THE PECS</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-frame">
            <img src={johnnyImg} alt="Johnny Bravo" />
          </div>
        </div>
      </section>

      <section className="lifestyle">
        <h2>THE JOHNNY LIFESTYLE</h2>

        <div className="cards">
          <div className="card">
            <h3>THE HAIR</h3>
            <p>It defies gravity, baby. Just like my charm.</p>
          </div>

          <div className="card card-dark">
            <h3>THE SHADES</h3>
            <p>I wear them indoors because the sun never sets on cool.</p>
          </div>

          <div className="card">
            <h3>THE MOVES</h3>
            <p>Certified disco ninja since 1997.</p>
          </div>
        </div>
      </section>
    </>
  );
}
