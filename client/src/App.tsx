import { useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const CONTRACT_ADDRESS = "PASTE_YOUR_SOLANA_CONTRACT_HERE";

  const getJohnnyReply = (text: string) => {
    const t = text.toLowerCase();

    if (t.includes("how"))
      return "How am I? Looking good, feeling great, and flexing constantly. 💪😎";
    if (t.includes("hair"))
      return "This hair defies gravity, logic, and common sense, baby.";
    if (t.includes("love"))
      return "Easy there, mama. Johnny only loves one thing — Johnny.";
    if (t.includes("coin"))
      return "Whoa mama! Johnny Coin? Sounds profitable AND handsome.";
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

    spawnBurst();
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    spawnBurst();
  };

  const copyContract = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    alert("Contract copied 💥");
    spawnBurst();
  };

  const spawnBurst = () => {
    const burst = document.createElement("div");
    burst.className = "comic-burst";
    burst.innerText = ["POW!", "BAM!", "WOW!", "HAA!"][
      Math.floor(Math.random() * 4)
    ];

    burst.style.left = Math.random() * 80 + "vw";
    burst.style.top = Math.random() * 80 + "vh";

    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 800);
  };

  return (
    <>
      <audio ref={audioRef} src="/hmph.mp3" />

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-box">JB</div>
          <span>Johnny Bravo</span>
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

          <div className="tagline">
            The one and only site for the man, the myth, the pompadour!
          </div>

          <div className="hero-buttons">
            <button onClick={() => scrollTo("ask")}>TALK TO ME, BABY!</button>
            <button onClick={() => scrollTo("lifestyle")}>CHECK THE PECS</button>
            <button onClick={() => scrollTo("about")}>ABOUT</button>
          </div>
        </div>

        <div className="hero-images">
          <img src="/johnny-hero.png" className="hero-img" />
          <img src="/johnny-coin.png" className="coin-img" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>ABOUT JOHNNY</h2>
        <div className="about-box">
          <p>
            Johnny Bravo is not just a man — he’s a lifestyle.
            A self-made legend with gravity-defying hair and unstoppable confidence.
          </p>
          <p className="about-quote">
            “Man, I’m pretty.” — Johnny Bravo
          </p>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section id="lifestyle" className="lifestyle">
        <h2>THE JOHNNY LIFESTYLE</h2>

        <div className="cards">
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
            <p>
              I don’t walk — I strut. Every step is a power move.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="how-to-buy">
        <h2>HOW TO BUY</h2>

        <div className="buy-box">
          <div className="buy-grid">
            <div className="buy-card">Solana</div>
            <div className="buy-card">Raydium</div>
            <div className="buy-card">DEXTools</div>
            <div className="buy-card">DEXScreener</div>
            <div className="buy-card">DEXView</div>
            <div className="buy-card">Jupiter</div>
          </div>

          <button className="copy-btn" onClick={copyContract}>
            📋 COPY CONTRACT
          </button>
        </div>
      </section>

      {/* ASK */}
      <section id="ask" className="ask">
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
    </>
  );
}
