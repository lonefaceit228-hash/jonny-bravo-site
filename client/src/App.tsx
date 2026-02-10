import "./index.css";
import johnnyImg from "./assets/johnny-bravo.png";

function App() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">WHOA<br />MAMA!</h1>

          <p className="hero-sub">
            The one and only site for the man, the myth,
            <br />
            the pompadour!
          </p>

          <div className="hero-buttons">
            <button className="btn primary">TALK TO ME, BABY!</button>
            <button className="btn outline">CHECK THE PECS</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={johnnyImg}
            alt="Johnny Bravo"
            className="johnny-image"
          />
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="lifestyle">
        <h2>THE JOHNNY LIFESTYLE</h2>

        <div className="cards">
          <div className="card">
            <h3>THE HAIR</h3>
            <p>It defies gravity, baby. Just like my charm.</p>
          </div>

          <div className="card dark">
            <h3>THE SHADES</h3>
            <p>I wear them indoors because the sun never sets on cool.</p>
          </div>

          <div className="card">
            <h3>THE MOVES</h3>
            <p>Certified disco ninja since 1997.</p>
          </div>
        </div>
      </section>

      {/* ASK JOHNNY */}
      <section className="ask">
        <h2>ASK JOHNNY!</h2>
        <p className="ask-sub">I'm pretty, you're pretty. Let's talk!</p>

        <div className="chat">
          <div className="chat-header">JOHNNY SAYS:</div>
          <div className="chat-box">
            Hey pretty mama! Or handsome dude! Ask me anything! Hah-huh!
          </div>

          <div className="chat-input">
            <input placeholder="Talk to the hair..." />
            <button>➤</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
