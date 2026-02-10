import { useState } from "react";
import johnnyImg from "./assets/johnny-bravo.png";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Hey pretty mama! Ask me anything. Hah-huh! 😎"
  );

  const talkToJohnny = () => {
    if (!message.trim()) return;

    const text = message.toLowerCase();

    let answer = "Hah? Say that again, pretty! 💪😏";

    if (text.includes("how are you")) {
      answer =
        "How am I? Looking good, feeling great, and flexing constantly. 💪😎";
    } else if (text.includes("hello") || text.includes("hi")) {
      answer = "Hey there, baby! Johnny Bravo in the house! 😎👉";
    } else if (text.includes("love")) {
      answer = "Love? Careful, pretty mama. I break hearts daily. 💔😏";
    } else if (text.includes("who are you")) {
      answer =
        "Who am I? Muscles. Hair. Sunglasses. Legend. Johnny Bravo. 😎";
    }

    setReply(answer);
    setMessage("");
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
            <img src={johnnyImg} alt="Johnny Bravo" />
          </div>
        </div>
      </section>

      {/* ASK JOHNNY */}
      <section className="ask">
        <h2>ASK JOHNNY!</h2>
        <p>I'm pretty, you're pretty. Let's talk!</p>

        <div className="chat">
          <div className="chat-image">
            <img src={johnnyImg} alt="Johnny Bravo" />
          </div>

          <div className="chat-box">
            <div className="bubble">
              <strong>Johnny says:</strong> {reply}
            </div>

            <div className="input-row">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Talk to the hair..."
                onKeyDown={(e) => e.key === "Enter" && talkToJohnny()}
              />
              <button onClick={talkToJohnny}>▶</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
