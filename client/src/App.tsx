import { useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [showBurst, setShowBurst] = useState(false);
  const heroRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
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

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">JB Johnny Bravo</div>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noreferrer"
          className="x-btn"
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

          <p className="subtitle">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="buttons">
            <button onClick={() => scrollTo("ask")}>TALK TO ME, BABY!</button>
            <button onClick={() => scrollTo("lifestyle")}>
              CHECK THE PECS
            </button>
            <button onClick={() => scrollTo("about")}>ABOUT</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            ref={heroRef}
            src="/johnny-hero.png"
            alt="Johnny Bravo"
            className="johnny"
          />
          <img
            src="/johnny-coin.png"
            alt="Johnny Coin"
            className="coin"
          />
        </div>

        {showBurst && <div className="burst">POW! BAM!</div>}
      </section>

      {/* HOW TO BUY */}
      <section className="how-to-buy">
        <h2>HOW TO BUY</h2>

        <div className="buy-box">
          <div className="buy-grid">
            <div>Solana</div>
            <div>Raydium</div>
            <div>DEXTools</div>
            <div>DEXScreener</div>
            <div>DEXView</div>
            <div>Jupiter</div>
          </div>

          <button className="copy-btn">📋 COPY CONTRACT</button>
        </div>
      </section>

      {/* ASK */}
      <section id="ask" className="ask">
        <h2>ASK JOHNNY!</h2>
      </section>
    </>
  );
}
