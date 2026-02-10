import { useRef, useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );
  const [showJohnny, setShowJohnny] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const askRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => setShowJohnny(true), 300);
  }, []);

  const spawnBurst = (text: string) => {
    const el = document.createElement("div");
    el.className = "comic-burst";
    el.innerText = text;
    el.style.left = `${50 + (Math.random() * 30 - 15)}%`;
    el.style.top = `${40 + (Math.random() * 30 - 15)}%`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  };

  const getJohnnyReply = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes("how")) return "Looking good. Feeling great. Flexing always 💪";
    if (t.includes("hair")) return "This hair defies gravity AND science.";
    if (t.includes("love")) return "Johnny loves Johnny.";
    if (t.includes("coin")) return "Johnny Coin? Handsome AND profitable.";
    if (t.includes("pec")) return "Careful, baby… these pecs bend time.";
    return "Whoa mama! Say that again slower.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    setReply(`Johnny says: ${getJohnnyReply(message)}`);
    setMessage("");
    audioRef.current?.play();
    spawnBurst("POW!");
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-box">JB</div>
          <strong>Johnny Bravo</strong>
        </div>

        <a
          className="community-btn"
          href="https://x.com/i/communities/2020974893467099418"
          target="_blank"
          rel="noreferrer"
        >
          X COMMUNITY ↗
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

          <p className="tagline">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="hero-buttons">
            <button
              className="btn primary"
              onClick={() => {
                spawnBurst("BAM!");
                askRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              TALK TO ME, BABY!
            </button>

            <button
              className="btn"
              onClick={() => {
                spawnBurst("POW!");
                audioRef.current?.play();
                alert("💪 WHOA MAMA! THESE PECS ARE DANGEROUS 💪");
              }}
            >
              CHECK THE PECS
            </button>

            <button
              className="btn"
              onClick={() => {
                spawnBurst("WOW!");
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ABOUT
            </button>
          </div>
        </div>

        <div className={`hero-images ${showJohnny ? "show" : ""}`}>
          <img src="/johnny-hero.png" className="hero-img" />
          <img src="/johnny-coin.png" className="coin-img" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" ref={aboutRef}>
        <h2>ABOUT JOHNNY</h2>

        <div className="about-box">
          <p>
            Johnny Bravo is not just a man — he’s a lifestyle. A self-made legend
            with gravity-defying hair and unstoppable confidence.
          </p>

          <p className="about-quote">
            “Man, I’m pretty.” — Johnny Bravo
          </p>
        </div>
      </section>

      {/* ASK */}
      <section className="ask" ref={askRef}>
        <h2>ASK JOHNNY!</h2>

        <div className="chat-box">
          <img src="/johnny-hero.png" />

          <div className="chat-ui">
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
