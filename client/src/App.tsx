import { useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const askRef = useRef<HTMLDivElement | null>(null);

  // 💥 COMIC BURST
  const spawnBurst = (text: string) => {
    const burst = document.createElement("div");
    burst.className = "comic-burst";
    burst.innerText = text;

    burst.style.left = `${50 + (Math.random() * 20 - 10)}%`;
    burst.style.top = `${40 + (Math.random() * 20 - 10)}%`;

    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 900);
  };

  const getJohnnyReply = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes("how")) return "Looking good, feeling great, flexing always 💪";
    if (t.includes("hair")) return "This hair defies gravity AND logic.";
    if (t.includes("love")) return "Johnny loves one thing — Johnny.";
    if (t.includes("coin")) return "Johnny Coin? Profitable AND handsome.";
    if (t.includes("pec")) return "Careful baby… these pecs have their own orbit.";
    return "Whoa mama! Say that again slower.";
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
        >
          X COMMUNITY ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>WHOA<br />MAMA!</h1>
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
                if (audioRef.current) {
                  audioRef.current.currentTime = 0;
                  audioRef.current.play();
                }
                alert("💪 WHOA MAMA! THESE PECS ARE ILLEGAL 💪");
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

        <div className="hero-images">
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
            with gravity-defying hair, sunglasses worn indoors, and confidence
            measured in flexes per second.
          </p>
          <p>
            Born cool. Raised cooler. Johnny doesn’t chase trends — trends chase
            Johnny.
          </p>
          <p className="about-quote">“Man, I’m pretty.” — Johnny Bravo</p>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="lifestyle">
        <h2>THE JOHNNY LIFESTYLE</h2>
        <div className="cards">
          <div className="card">THE HAIR<br /><span>Defies gravity.</span></div>
          <div className="card dark">THE SHADES<br /><span>Sun never sets.</span></div>
          <div className="card">THE MOVES<br /><span>I don’t walk. I strut.</span></div>
        </div>
      </section>

      {/* ASK */}
      <section className="ask" ref={askRef}>
        <h2>ASK JOHNNY!</h2>
        <p>I’m pretty, you’re pretty. Let’s talk!</p>

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
