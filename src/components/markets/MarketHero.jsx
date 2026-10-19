import React from "react";
import Icon from "../Icon.jsx";
import Lotus from "../Lotus.jsx";

export default function MarketHero({ onViewEvents }) {
  return (
    <section className="hero" id="top">
      <div className="hero__image" />
      <div className="hero__content">
        <p className="eyebrow">MÖT OSS RUNT OM I STOCKHOLM</p>
        <h1>Marknader, mässor &<br />pop-up-butik 2026</h1>
        <div className="flourish"><span /><Lotus /><span /></div>
        <p className="hero__copy">Här ser du var Beauty of India finns den närmaste tiden.<br className="desktop-break" /> Kom och dofta, prova, känna och upptäck vårt sortiment<br className="desktop-break" /> på plats!</p>
        <button className="button" onClick={onViewEvents}>Se alla datum <Icon name="arrow" size={16} /></button>
      </div>
    </section>
  );
}
