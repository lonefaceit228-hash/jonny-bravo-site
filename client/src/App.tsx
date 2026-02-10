import { useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  // 🔊 audio from /public
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getJohnnyReply = async (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("how")) {
      return "How am I? Looking good, feeling great, and flexing constantly. 💪😎";
    }

    if (lower.includes("love")) {
      return "Easy there, mama. Johnny only loves one thing — Johnny. 😌";
    }

    if (lower.includes("hair")) {
      return "This hair? Defies gravity AND logic, baby.";
    }

    if (lower.includes("hello") || lower.includes("hi")) {
      return "Hey there, good lookin’. Johnny noticed you first. 😉";
    }

    return "Whoa mama! Say that again slower — Johnny was admiring himself.";
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const answer = await getJohnnyReply(message);
    setReply(`Johnny says: ${answer}`);
    setMessage("");

    // 🔊 play sound ONLY after user action
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* hidden audio */}
      <audio ref={audioRef} src="/hmph.mp3" preload="auto" />

      <header className="header">
        <div className="logo">
          <span className="logo-box">JB</span>
          <span className="logo-text">Johnny Bravo</span>
        </div>

        <a
          href="#"
          className="community-btn"
          onClick={(e) => e.preventDefault()}
        >
          ✕ COMMUNITY ↗
        </a>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            WHOA <br /> MAMA!
          </h1>

          <p className="hero-sub">
            The one and only site for the man, the myth, the pompadour!
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">TALK TO ME, BABY!</button>
            <button className="btn btn-outline">CHECK THE PECS</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-frame">
            <img src="/johnny.png" alt="Johnny Bravo" />
          </div>
        </div>
      </section>

      <section className="ask">
        <h2>ASK JOHNNY!</h2>
        <p className="ask-sub">I'm pretty, you're pretty. Let's talk!</p>

        <div className="chat">
          <div className="chat-box">
            <div className="bubble">{reply}</div>

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
