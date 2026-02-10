import { useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [burst, setBurst] = useState<string | null>(null);

  const CONTRACT = "PASTE_YOUR_TOKEN_ADDRESS_HERE";

  useEffect(() => {
    heroRef.current?.classList.add("johnny-enter");
  }, []);

  const pop = (text: string) => {
    setBurst(text);
    setTimeout(() => setBurst(null), 600);
  };

  const scrollTo = (id: string, text: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    pop(text);
  };

  const copyContract = async () => {
    await navigator.clipboard.writeText(CONTRACT);
    pop("COPIED!");
  };

  return (
    <>
      {burst && <div className="burst">{burst}</div>}

      <header className="header">
        <div className="logo">
          <div className="logo-badge">JB</div>
          Johnny Bravo
        </div>
        <button className="btn">X COMMUNITY ↗</button>
      </header>

      <section className="hero">
        <div>
          <h1>WHOA<br/>MAMA!</h1>
          <p>The one and only site for the man, the myth, the pompadour!</p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => scrollTo("ask", "POW!")}>
              TALK TO ME, BABY!
            </button>
            <button className="btn" onClick={() => scrollTo("lifestyle", "BAM!")}>
              CHECK THE PECS
            </button>
            <button className="btn" onClick={() => scrollTo("about", "WOW!")}>
              ABOUT
            </button>
          </div>
        </div>

        <div className="hero-image" ref={heroRef}>
          <img src="/johnny-hero.png" alt="Johnny Bravo" />
        </div>
      </section>

      <section id="about" className="section">
        <h2>ABOUT JOHNNY</h2>
        <div className="card">
          Johnny Bravo is not just a man — he’s a lifestyle.  
          A self-made legend with gravity-defying hair and unstoppable confidence.
          <br/><br/>
          <b>“Man, I’m pretty.”</b>
        </div>
      </section>

      <section id="lifestyle" className="section">
        <h2>THE JOHNNY LIFESTYLE</h2>
        <div className="cards">
          <div className="card">THE HAIR<br/>It defies gravity, baby.</div>
          <div className="card black">THE SHADES<br/>The sun never sets on cool.</div>
          <div className="card">THE MOVES<br/>I don’t walk — I strut.</div>
        </div>
      </section>

      <section className="section yellow">
        <h2>HOW TO BUY</h2>
        <div className="buy-box">
          <div className="buy-grid">
            <div className="buy-item">Solana</div>
            <div className="buy-item">Raydium</div>
            <div className="buy-item">DEXTools</div>
            <div className="buy-item">DEXScreener</div>
            <div className="buy-item">DEXView</div>
            <div className="buy-item">Jupiter</div>
          </div>
          <button className="copy-btn" onClick={copyContract}>
            📋 COPY CONTRACT
          </button>
        </div>
      </section>

      <section id="ask" className="section">
        <h2>ASK JOHNNY!</h2>
        <img src="/johnny-hero.png" style={{ maxWidth: 400 }} />
      </section>
    </>
  );
}
