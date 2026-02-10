import { useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [showBurst, setShowBurst] = useState(false);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const CONTRACT =
    "So11111111111111111111111111111111111111112"; // ← замени на свой

  useEffect(() => {
    // анимация появления Johnny — ОДИН РАЗ и остаётся
    if (heroRef.current) {
      heroRef.current.classList.add("johnny-enter");
    }
  }, []);

  const burst = () => {
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 600);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    burst();
  };

  const copyContract = async () => {
    await navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    burst();
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      {/* COMIC BURST */}
      {showBurst && (
        <div className="comic-burst">
          <span>POW!</span>
          <span>BAM!</span>
        </div>
      )}

      {/* HEADER */}
      <header className="top">
        <div className="logo">JB</div>
        <div className="title">JOHNNY BRAVO</div>
        <a
          className="x-btn"
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
        >
          X COMMUNITY ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>WHOA<br />MAMA!</h1>
          <p className="tagline">
            THE ONE AND ONLY SITE FOR THE MAN, THE MYTH, THE POMPADOUR!
          </p>

          <div className="buttons">
            <button onClick={() => scrollTo("ask")}>TALK TO ME, BABY!</button>
            <button onClick={() => scrollTo("buy")}>CHECK THE PECS</button>
            <button onClick={() => scrollTo("about")}>ABOUT</button>
          </div>
        </div>

        <div className="hero-right" ref={heroRef}>
          <img src="/johnny-hero.png" alt="Johnny Bravo" />
          <img className="coin" src="/johnny-coin.png" alt="Johnny Coin" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>ABOUT JOHNNY</h2>
        <div className="about-box">
          <p>
            <strong>Johnny Bravo</strong> is not just a man — he’s a lifestyle.
            A self-made legend with gravity-defying hair and unstoppable
            confidence.
          </p>
          <p className="quote">“Man, I’m pretty.” — Johnny Bravo</p>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section id="buy" className="how">
        <h2>HOW TO BUY</h2>
        <div className="how-box">
          <div className="how-grid">
            <div>Solana</div>
            <div>Raydium</div>
            <div>DEXTools</div>
            <div>DEXScreener</div>
            <div>DEXView</div>
            <div>Jupiter</div>
          </div>

          <button className="copy" onClick={copyContract}>
            📋 {copied ? "COPIED!" : "COPY CONTRACT"}
          </button>
        </div>
      </section>

      {/* ASK */}
      <section id="ask" className="ask">
        <h2>ASK JOHNNY!</h2>
        <div className="ask-box">
          <img src="/johnny-hero.png" alt="Johnny" />
          <div className="chat">
            <p className="chat-title">
              Hey pretty mama! Ask me anything. Hah-huh! 😎
            </p>
            <input placeholder="Talk to the hair..." />
            <button onClick={burst}>▶</button>
          </div>
        </div>
      </section>
    </>
  );
}
