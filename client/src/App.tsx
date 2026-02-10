import { useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
  const heroRef = useRef<HTMLImageElement | null>(null);
  const [showBurst, setShowBurst] = useState(false);

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
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="logo">JB <span>Johnny Bravo</span></div>
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
        <div className="hero-text">
          <h1>WHOA<br />MAMA!</h1>
          <p className="subtitle">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="buttons">
            <button onClick={() => scrollTo("ask")}>TALK TO ME, BABY!</button>
            <button onClick={() => scrollTo("lifestyle")}>CHECK THE PECS</button>
            <button onClick={() => scrollTo("about")}>ABOUT</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            ref={heroRef}
            src="/johnny-hero.png"
            alt="Johnny Bravo"
          />
          <img
            className="coin"
            src="/johnny-coin.png"
            alt="Johnny Coin"
          />
        </div>

        {showBurst && <div className="burst">POW! BAM!</div>}
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>ABOUT JOHNNY</h2>
        <div className="about-box">
          <p>
            Johnny Bravo is not just a man — he’s a lifestyle.  
            A self-made legend with gravity-defying hair and unstoppable confidence.
          </p>
          <p className="quote">“Man, I’m pretty.” — Johnny Bravo</p>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section id="lifestyle" className="lifestyle">
        <h2>THE JOHNNY LIFESTYLE</h2>

        <div className="cards">
          <div className="card">
            <h3>THE HAIR</h3>
            <p>It defies gravity, baby.</p>
          </div>

          <div className="card dark">
            <h3>THE SHADES</h3>
            <p>The sun never sets on cool.</p>
          </div>

          <div className="card">
            <h3>THE MOVES</h3>
            <p>I don’t walk — I strut.</p>
          </div>
        </div>
      </section>

      {/* ASK */}
      <section id="ask" className="ask">
        <h2>ASK JOHNNY!</h2>
        <img src="/johnny-hero.png" alt="Johnny" />
      </section>
    </div>
  );
}
