import React, { useState } from "react";
import Icon from "../Icon.jsx";
import Lotus from "../Lotus.jsx";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submitNewsletter = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__image" role="img" aria-label="Färgglada indiska tyger" />
      <div className="newsletter__content">
        <div className="newsletter__heading"><Lotus /><h2>Håll dig uppdaterad!</h2></div>
        <p>Följ oss på sociala medier eller anmäl dig till vårt nyhetsbrev<br className="desktop-break" /> så får du information om kommande marknader och event.</p>
        <div className="newsletter__actions">
          <a className="button button--orange" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Följ oss på Instagram <Icon name="arrow" size={16} /></a>
          <form onSubmit={submitNewsletter}>
            {subscribed ? <span className="subscribe-success">Tack! Du är anmäld.</span> : (
              <>
                <label className="visually-hidden" htmlFor="newsletter-email">Din e-postadress</label>
                <input id="newsletter-email" type="email" placeholder="Din e-postadress" value={email} onChange={(event) => setEmail(event.target.value)} required />
                <button className="button button--light" type="submit">Anmäl dig <Icon name="arrow" size={16} /></button>
              </>
            )}
          </form>
        </div>
        <Lotus className="newsletter__ornament" />
      </div>
    </section>
  );
}
