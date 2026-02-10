import { useState } from "react";
import johnnyImg from "./assets/johnny-bravo.png";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Or handsome dude! Ask me anything! Hah-huh!"
  );

  const handleSend = () => {
    if (!message.trim()) return;

    setReply(
      `Johnny says: "${message}"? Heh. Nice one, baby! 💪😎`
    );
    setMessage("");
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="logo-box">JB</span>
          <span className="logo-text">Johnny Bravo</span>
        </div>

        <a
          href="https://x.com/i/communities/2020974893467099418"
          target="_blank"
          rel="noopener noreferrer"
          className="community-btn"
        >
          X COMMUNITY ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            WHOA <br /> MAMA!
          </h1>

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

      {/* LIFESTYLE */}
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

      {/* ASK JOHNNY */}
      <section className="ask">
        <h2>ASK JOHNNY!</h2>
        <p>I'm pretty, you're pretty. Let's talk!</p>

        <div className="chat">
          <div className="chat-image">
            <img src={johnnyImg} alt="Johnny" />
          </div>

          <div className="chat-box">
            <div className="bubble">{reply}</div>

            <div className="input-row">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Talk to the hair..."
              />
              <button onClick={handleSend}>➤</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

