import { useState } from "react";
import johnnyImg from "./assets/johnny-bravo.png";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Or handsome dude! Ask me anything. Hah-huh!"
  );

  const playSound = () => {
    const audio = new Audio("/hah-huh.mp3");
    audio.play();
  };

  const askJohnny = () => {
    if (!message.trim()) return;

    const lower = message.toLowerCase();
    let answer = "Hah! I'm too cool to answer that, baby 😎";

    if (lower.includes("how are you")) {
      answer =
        "How am I? Looking good, feeling great, and flexing constantly 💪😎";
    } else if (lower.includes("hello") || lower.includes("hi")) {
      answer = "Whoa mama! Hello there 😎👉👉";
    } else if (lower.includes("love")) {
      answer = "Easy there, baby! Johnny Bravo loves everyone 😘";
    } else if (lower.includes("who are you")) {
      answer = "I'm Johnny Bravo. The hair. The muscles. The legend.";
    }

    setReply(`Johnny says: "${answer}"`);
    setMessage("");
    playSound();
  };

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
        <h2>ASK JOHNNY!</h2>
        <p className="ask-sub">I'm pretty, you're pretty. Let's talk!</p>

        <div className="chat">
          <div className="chat-image">
            <img src={johnnyImg} alt="Johnny" />
          </div>

          <div className="chat-box">
            <div className="bubble">{reply}</div>

            <div className="input-row">
              <input
                placeholder="Talk to the hair..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && askJohnny()}
              />
              <button onClick={askJohnny}>▶</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
