import { useRef, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getJohnnyReply = (text: string) => {
    const t = text.toLowerCase();

    if (t.includes("how")) {
      return "How am I? Looking good, feeling great, and flexing constantly. 💪😎";
    }
    if (t.includes("love")) {
      return "Easy there, mama. Johnny only loves one thing — Johnny. 😉";
    }
    if (t.includes("hair")) {
      return "This hair? Defies gravity, logic, and common sense, baby.";
    }
    if (t.includes("coin")) {
      return "Whoa mama! Johnny Coin? Sounds profitable AND handsome.";
    }

    return "Whoa mama! Say that again slower — Johnny was admiring himself.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const answer = getJohnnyReply(message);
    setReply(`Johnny says: ${answer}`);
    setMessage("");

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/hmph.mp3" preload="auto" />

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="logo-box">JB</span>
          <span className="logo-text">Johnny Bravo</span>
        </div>
        <button className="community-btn">✕ COMMUNITY ↗</button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            WHOA <br /> MAMA!
          </h1>

          <p className="hero-sub">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="hero-buttons">
            <button className="btn primary">TALK TO ME, BABY!</button>

            <button
              className="btn secondary"
              onClick={() =>
                document
                  .getElementById("lifestyle")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              CHECK THE PECS
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/johnny-hero.png"
            alt="Johnny Bravo"
            className="hero-img"
          />
          <img
            src="/johnny-coin.png"
            alt="Johnny Coin"
            className="coin-img"
          />
        </div>
      </section>

      {/* ASK JOHNNY */}
      <section className="ask">
        <h2>ASK JOHNNY!</h2>
        <p className="ask-sub">I'm pretty, you're pretty. Let's talk!</p>

        <div className="chat-box">
          <div className="reply">{reply}</div>

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
      </section>

      {/* LIFESTYLE */}
      <section id="lifestyle" className="lifestyle">
        <h2 className="section-title">THE JOHNNY LIFESTYLE</h2>

        <div className="cards">
          <div className="card">
            <div className="icon">✨</div>
            <h3>THE HAIR</h3>
            <p>
              It defies gravity, baby. Just like my charm.
            </p>
          </div>

          <div className="card dark">
            <div className="icon">⭐</div>
            <h3>THE SHADES</h3>
            <p>
              I wear them indoors because the sun never sets on cool.
            </p>
          </div>

          <div className="card">
            <div className="icon">⚡</div>
            <h3>THE MOVES</h3>
            <p>
              I don’t walk — I strut. Every step is a power move.
              Confidence first, muscles second, rhythm always.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
