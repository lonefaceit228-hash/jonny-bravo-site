import { useState } from "react";
import johnnyImg from "./assets/johnny-bravo.png";

export default function App() {
  const [message, setMessage] = useState("");
const [reply, setReply] = useState(
  "Hey pretty mama! Or handsome dude! Ask me anything! Hah-huh!"
);
return (
    <>
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
          ✕ COMMUNITY ↗
        </a>
      </header>

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
   <section className="ask">
  <h2 className="ask-title">ASK JOHNNY!</h2>
  <p className="ask-sub">I'm pretty, you're pretty. Let's talk!</p>

  <div className="ask-box">
    <div className="ask-image">
      <img src={johnnyImg} alt="Johnny The Man" />
      <span className="ask-caption">Johnny The Man</span>
    </div>

    <div className="ask-chat">
      <div className="ask-message">
        <strong>JOHNNY SAYS:</strong>
        <p>{reply}</p>
      </div>

      <form
        className="ask-form"
        onSubmit={(e) => {
          e.preventDefault();

          if (!message.trim()) return;

          setReply(`Hah-huh! "${message}"? You're alright, baby 😎`);
          setMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Talk to the hair..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">➤</button>
      </form>
    </div>
  </div>
</section>
 </>
  );
}
