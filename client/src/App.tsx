import { useState, useRef } from "react";
import johnnyImg from "./assets/johnny-bravo.png";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getJohnnyReply = async (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("how")) {
      return "How am I? Looking good, feeling great, and flexing constantly. 💪😎";
    }
    if (lower.includes("love")) {
      return "Easy there, mama. Johnny only loves one thing — Johnny. 😏";
    }
    if (lower.includes("hair")) {
      return "This hair? Defies gravity AND logic, baby.";
    }

    return "Whoa mama! Say that again slower — Johnny was admiring himself.";
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const answer = await getJohnnyReply(message);
    setReply(`Johnny says: ${answer}`);
    setMessage("");

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Talk to the hair..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>▶</button>
            </div>
          </div>
        </div>

        {/* 🔊 звук из public */}
        <audio ref={audioRef} src="/hah-huh.mp3" preload="auto" />
      </section>
    </>
  );
}
