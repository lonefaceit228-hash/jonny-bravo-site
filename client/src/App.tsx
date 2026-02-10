import { useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const lifestyleRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const comicBurst = (text: string, x: number, y: number) => {
    const el = document.createElement("div");
    el.className = "comic-burst";
    el.innerText = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 600);
  };

  const getJohnnyReply = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes("how")) return "Looking good, feeling great, flexing constantly 💪😎";
    if (t.includes("hair")) return "This hair defies gravity AND logic, baby.";
    if (t.includes("love")) return "Johnny only loves one thing — Johnny.";
    if (t.includes("coin")) return "Whoa mama! Profitable AND handsome.";
    if (t.includes("pec")) return "Careful, baby. These pecs bend spacetime.";
    return "Whoa mama! Say that again slower — Johnny was admiring himself.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    setReply(`Johnny says: ${getJohnnyReply(message)}`);
    setMessage("");
  };

  return (
    <>
      {/* HEADER */}
      <div className="header">
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
      </div>

      {/* HERO */}
      <div className="hero">
        <div>
          <h1>WHOA<br />MAMA!</h1>
          <p>The one and only site for the man, the myth, the pompadour!</p>

          <div className="hero-buttons">
            <button
              className="primary"
              onClick={(e) => {
                comicBurst("POW!", e.clientX, e.clientY);
                document.getElementById("ask")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              TALK TO ME, BABY!
            </button>

            <button
              onClick={(e) => {
                comicBurst("BAM!", e.clientX, e.clientY);
                lifestyleRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CHECK THE PECS
            </button>

            <button
              onClick={(e) => {
                comicBurst("WHOA!", e.clientX, e.clientY);
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ABOUT
            </button>
          </div>
        </div>

        <img src="/johnny.png" alt="Johnny" width={320} />
      </div>

      {/* ABOUT */}
      <div className="about" ref={aboutRef}>
        <h2>ABOUT JOHNNY</h2>
        <div className="about-box">
          <p>
            Johnny Bravo is not just a man — he’s a lifestyle.
            Gravity-defying hair, sunglasses worn indoors,
            confidence measured in flexes per second.
          </p>
          <p>Born cool. Raised cooler.</p>
          <p className="about-quote">“Man, I’m pretty.” — Johnny Bravo</p>
        </div>
      </div>

      {/* LIFESTYLE */}
      <div className="lifestyle" ref={lifestyleRef}>
        <h2>THE JOHNNY LIFESTYLE</h2>

        <div className="lifestyle-grid">
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
            <p>I don’t walk — I strut. Every step is a power move.</p>
          </div>
        </div>
      </div>

      <div className="marquee">
        ★ DO THE MONKEY ★ MAN I’M PRETTY ★ HUH! HAH! HUH! ★ DO THE MONKEY ★
      </div>

      {/* ASK */}
      <div className="ask" id="ask">
        <h2>ASK JOHNNY!</h2>
        <p>I’m pretty, you’re pretty. Let’s talk!</p>

        <div className="ask-box">
          <div className="chat-box">
            <p>{reply}</p>
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
      </div>
    </>
  );
}
