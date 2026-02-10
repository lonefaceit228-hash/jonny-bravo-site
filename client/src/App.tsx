import { useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [showBurst, setShowBurst] = useState(false);
  const heroRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    heroRef.current?.classList.add("johnny-enter");
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
    <div className="page-overlay">
      {showBurst && <div className="burst show">POW!</div>}

      <header className="header">
        <div className="logo">JB Johnny Bravo</div>
        <a className="x-btn" href="#" target="_blank">X COMMUNITY ↗</a>
      </header>

      <section className="hero">
        <div>
          <h1>WHOA<br/>MAMA!</h1>
          <p>The one and only site for the man, the myth, the pompadour!</p>

          <div className="hero-buttons">
            <button className="primary" onClick={() => scrollTo("ask")}>
              TALK TO ME, BABY!
            </button>
            <button className="secondary" onClick={() => scrollTo("buy")}>
              CHECK THE PECS
            </button>
            <button className="secondary" onClick={() => scrollTo("about")}>
              ABOUT
            </button>
          </div>
        </div>

        <div className="johnny-wrap">
          <img
            ref={heroRef}
            src="/johnny-hero.png"
            className="johnny-hero"
            alt="Johnny Bravo"
          />
        </div>
      </section>

      <section id="about" style={{ padding: "120px 80px" }}>
        <h2>ABOUT JOHNNY</h2>
        <p>
          Johnny Bravo is not just a man — he’s a lifestyle.  
          A self-made legend with gravity-defying hair and unstoppable confidence.
        </p>
        <strong>“Man, I’m pretty.” — Johnny Bravo</strong>
      </section>

      <section id="buy" style={{ padding: "120px 80px" }}>
        <h2>HOW TO BUY</h2>
        <p>Solana • Raydium • DEXTools • DEXScreener • DEXView • Jupiter</p>
        <button className="primary" onClick={burst}>📋 COPY CONTRACT</button>
      </section>

      <section id="ask" style={{ padding: "120px 80px" }}>
        <h2>ASK JOHNNY!</h2>
        <img src="/johnny-coin.png" width="300" />
      </section>
    </div>
  );
}
