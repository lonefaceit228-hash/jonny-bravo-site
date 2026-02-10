import { useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const burstRef = useRef<HTMLDivElement | null>(null);

  const getJohnnyReply = (text: string) => {
    const t = text.toLowerCase();

    if (t.includes("how"))
      return "How am I? Looking good, feeling great, flexing constantly. 💪😎";
    if (t.includes("hair"))
      return "This hair defies gravity, logic, and common sense, baby.";
    if (t.includes("love"))
      return "Easy there, mama. Johnny only loves one thing — Johnny. 😏";
    if (t.includes("coin"))
      return "Whoa mama! Johnny Coin? Profitable AND handsome!";
    if (t.includes("pec"))
      return "Careful, baby. These pecs have their own gravity field.";

    return "Whoa mama! Say that again slower — Johnny was admiring himself.";
  };

  const playBurst = () => {
    if (!burstRef.current) return;
    burstRef.current.classList.remove("show");
    void burstRef.current.offsetWidth;
    burstRef.current.classList.add("show");
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

    playBurst();
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/hmph.mp3" />

      {/* COMIC BURST */}
      <div ref={burstRef} className="comic-burst">POW!</div>

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
          rel="noopener noreferrer"
        >
          X COMMUNITY ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>WHOA<br />MAMA!</h1>

          <div className="tagline">
            The one and only site for the man, the myth, the pompadour!
          </div>

          <div className="hero-buttons">
            <button className="primary" onClick={() => scrollTo("ask")}>
              TALK TO ME, BABY!
            </button>
            <button onClick={() => scrollTo("lifestyle")}>
              CHECK THE PECS
            </button>
            <button onClick={() => scrollTo("about")}>
              ABOUT
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img className="hero-img" src="/johnny-hero.png" alt="Johnny Hero" />
          <img className="coin-img" src="/johnny-coin.png" alt="Johnny Coin" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>ABOUT JOHNNY</h2>

        <div className="about-box">
          <p>
            Johnny Bravo is not just a man — he’s a lifestyle.
            A self-made legend with gravity-defying hair, sunglasses worn indoors,
            and confidence measured in flexes per second.
          </p>

          <p>
            Born cool. Raised cooler.<br />
            Johnny doesn’t chase trends — trends chase Johnny.
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
              I don’t walk — I strut.
              Every step is a power move.
              Confidence first, muscles second, rhythm always.
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        ★ DO THE MONKEY ★ MAN I’M PRETTY ★ HUH! HAH! HUH! ★ DO THE MONKEY ★
      </div>

      {/* ASK */}
      <section id="ask" className="ask">
        <h2>ASK JOHNNY!</h2>
        <p className="ask-sub">I’m pretty, you’re pretty. Let’s talk!</p>

        <div className="chat-box">
          <img src="/johnny-hero.png" alt="Johnny" />

          <div className="chat-ui">
            <div className="reply">{reply}</div>

            <div className="input-row">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Talk to the hair..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>▶</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
