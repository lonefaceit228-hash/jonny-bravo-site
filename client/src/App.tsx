export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-box">JB</span>
          Johnny Bravo
        </div>
        <a
          className="community-btn"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          ✕ COMMUNITY ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            WHOA <br /> MAMA!
          </h1>
          <p className="subtitle">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="buttons">
            <button className="btn primary">TALK TO ME, BABY!</button>
            <button className="btn secondary">CHECK THE PECS</button>
          </div>
        </div>

        <div className="hero-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0c/Johnny_Bravo.png"
            alt="Johnny Bravo"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>THE JOHNNY LIFESTYLE</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>THE HAIR</h3>
            <p>It defies gravity, baby. Just like my charm.</p>
          </div>

          <div className="feature-card dark">
            <h3>THE SHADES</h3>
            <p>I wear them indoors because the sun never sets on cool.</p>
          </div>

          <div className="feature-card">
            <h3>THE MOVES</h3>
            <p>Certified disco ninja since 1997.</p>
          </div>
        </div>
      </section>

      {/* ASK JOHNNY */}
      <section className="ask">
        <h2>ASK JOHNNY!</h2>
        <p className="ask-sub">
          I'm pretty, you're pretty. Let's talk!
        </p>

        <div className="chat">
          <div className="chat-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/0c/Johnny_Bravo.png"
              alt="Johnny"
            />
            <span>The Man</span>
          </div>

          <div className="chat-box">
            <div className="bubble">
              <strong>JOHNNY SAYS:</strong>
              <p>
                Hey pretty mama! Or handsome dude! Ask me anything!
                Hah-huh!
              </p>
            </div>

            <div className="input-row">
              <input placeholder="Talk to the hair..." />
              <button>➤</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
