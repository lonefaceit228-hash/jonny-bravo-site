import { useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lifestyleRef = useRef<HTMLDivElement | null>(null);

  const getJohnnyReply = (text: string) => {
    const t = text.toLowerCase();

    if (t.includes("how"))
      return "How am I? Looking good, feeling great, and flexing constantly. 💪😎";
    if (t.includes("hair"))
      return "This hair? It defies gravity, logic, and common sense, baby.";
    if (t.includes("love"))
      return "Easy there, mama. Johnny only loves one thing — Johnny. 😏";
    if (t.includes("coin"))
      return "Whoa mama! Johnny Coin? Profitable AND handsome!";
    if (t.includes("pec"))
      return "Careful, baby. These pecs have their own gravity field.";

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

  const scrollToLifestyle = () => {
    lifestyleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="logo-box">JB</span>
          <span>Johnny Bravo</span>
        </div>
        <a className="community-btn" href="#">
          ✕ COMMUNITY ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            WHOA
            <br />
            MAMA!
          </h1>

          <div className="tagline">
            The one and only site for the man, the myth, the pompadour!
          </div>

          <div className="hero-buttons">
            <button className="btn primary">TALK TO ME, BABY!</button>
            <button className="btn" onClick={scrollToLifestyle}>
              CHECK THE PECS
            </button>
          </div>
        </div>

        <div className="hero-images">
          <img
            src="/johnny-hero.png"
            alt="Johnny Bravo"
            className="hero-main"
          />
          <img
            src="/johnny-coin.png"
            alt="Johnny Coin"
            className="hero-coin"
          />
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="lifestyle" ref={lifestyleRef}>
        <h2>THE JOHNNY LIFESTYLE</h2>

        <div className="cards">
          <div className="card">
            ✨
            <h3>THE HAIR</h3>
            <p>It defies gravity, baby. Just like my charm.</p>
          </div>

          <div className="card dark">
            ⭐
            <h3>THE SHADES</h3>
            <p>I wear them indoors because the sun never sets on cool.</p>
          </div>

          <div className="card">
            ⚡
            <h3>THE MOVES</h3>
            <p>
              I don’t walk — I strut. Every step is a power move. Confidence
              first, muscles second, rhythm always.
            </p>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        ★ DO THE MONKEY ★ MAN I’M PRETTY ★ HUH! HAH! HUH! ★ DO THE MONKEY ★
      </div>

      {/* ASK JOHNNY */}
      <section className="ask">
        <h2>ASK JOHNNY!</h2>
        <p className="ask-sub">I'm pretty, you're pretty. Let's talk!</p>

        <div className="chat-box">
          <img src="/johnny-hero.png" alt="Johnny" />

          <div className="chat">
            <div className="reply">{reply}</div>

            <div className="input-row">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Talk to the hair..."
              />
              <button onClick={sendMessage}>▶</button>
            </div>
          </div>
        </div>
      </section>

      <audio ref={audioRef} src="/hmph.mp3" />
    </>
  );
}
