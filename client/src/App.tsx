import { useState } from "react";
import johnnyImg from "./assets/johnny-bravo.png";
import hah from "./assets/hah-huh.mp3";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything 😎"
  );
  const [loading, setLoading] = useState(false);

  const playSound = () => {
    const audio = new Audio(hah);
    audio.play();
  };

  const askJohnny = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      // ⚠️ ЕСЛИ НЕТ API — Johnny отвечает локально
      if (!import.meta.env.VITE_OPENAI_KEY) {
        const localReplies = [
          "How am I? Looking good, feeling great, flexing constantly 💪😎",
          "Confidence is my cardio, baby.",
          "Mirror and I agree — perfection.",
          "Easy there, mama. I'm sensitive… and muscular.",
        ];
        const random =
          localReplies[Math.floor(Math.random() * localReplies.length)];
        setReply(`Johnny says: ${random}`);
        playSound();
        setMessage("");
        return;
      }

      // 🤖 REAL AI JOHNNY
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are Johnny Bravo. Speak confidently, funny, flirty, cartoon-style. Short punchy answers.",
            },
            { role: "user", content: message },
          ],
        }),
      });

      const data = await res.json();
      const text = data.choices[0].message.content;

      setReply(`Johnny says: ${text}`);
      playSound();
      setMessage("");
    } catch (e) {
      setReply("Whoa mama… something broke 💥");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="logo-box">JB</span>
          <span className="logo-text">Johnny Bravo</span>
        </div>

        <a
          href="https://x.com/i/communities/2020974893467099418"
          target="_blank"
          rel="noopener noreferrer"
          className="community-btn"
        >
          X COMMUNITY ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero container">
        <div className="hero-left">
          <h1 className="hero-title">
            WHOA <br /> MAMA!
          </h1>

          <p className="hero-sub">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() =>
                document
                  .getElementById("ask")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              TALK TO ME, BABY!
            </button>
            <button className="btn btn-outline">CHECK THE PECS</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-frame">
            <img src={johnnyImg} alt="Johnny Bravo" />
          </div>
        </div>
      </section>

      {/* ASK JOHNNY */}
      <section id="ask" className="ask">
        <div className="container">
          <h2>ASK JOHNNY!</h2>
          <p>I'm pretty, you're pretty. Let's talk.</p>

          <div className="chat">
            <div className="chat-image">
              <img src={johnnyImg} alt="Johnny" />
            </div>

            <div className="chat-box">
              <div className="bubble">
                {loading ? "Thinking… 😎" : reply}
              </div>

              <div className="input-row">
                <input
                  placeholder="Talk to the hair..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && askJohnny()}
                />
                <button onClick={askJohnny}>▶</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
