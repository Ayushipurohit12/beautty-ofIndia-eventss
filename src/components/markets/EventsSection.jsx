import React, { useState } from "react";
import { eventsByMonth } from "../../data/events.js";
import { months, monthAbbreviations, photo } from "../../data/catalog.js";
import EventCard from "../EventCard.jsx";
import Icon from "../Icon.jsx";
import Lotus from "../Lotus.jsx";

export default function EventsSection({ onEventSelect }) {
  const [activeMonth, setActiveMonth] = useState("Oktober");
  const [showAll, setShowAll] = useState(false);
  const allEvents = Object.values(eventsByMonth).flat();
  const monthEvents = activeMonth === "Alla datum" ? allEvents : eventsByMonth[activeMonth];
  const events = showAll ? monthEvents : monthEvents.slice(0, 5);
  const firstDateParts = monthEvents[0]?.date.split(" ") ?? [];
  const firstMonth = firstDateParts.at(-1)?.toLowerCase();
  const featured = activeMonth === "Oktober"
    ? { title: "Harmoni Expo – Solna", date: "24–25 oktober 2026", badge: ["24–25 OKT", "2026"], place: "Solnahallen", image: "diya" }
    : {
        title: `${activeMonth} – hitta oss nära dig`,
        date: monthEvents[0]?.date ?? activeMonth,
        badge: [`${firstDateParts[1] ?? ""} ${monthAbbreviations[firstMonth] ?? ""}`, activeMonth.includes("2027") ? "2027" : "2026"],
        place: monthEvents[0]?.place ?? "Stockholm",
        image: monthEvents[0]?.image ?? "textile",
      };

  return (
    <section className="events-section" id="events">
      <div className="month-tabs" role="tablist" aria-label="Välj period">
        {months.map((month) => (
          <button key={month} role="tab" aria-selected={activeMonth === month} className={activeMonth === month ? "month-tab is-selected" : "month-tab"} onClick={() => { setActiveMonth(month); setShowAll(false); }}>
            {month}
          </button>
        ))}
      </div>
      <h2 className="section-title">{activeMonth === "Alla datum" ? "Alla kommande datum" : `${activeMonth} 2026`}</h2>
      <div className="title-flourish"><span /><Lotus /><span /></div>
      <article className="featured-event">
        <div className="featured-event__image" style={{ backgroundImage: `url("${photo(featured.image, 900)}")` }}>
          <span className="featured-date">{featured.badge[0]}<br /><small>{featured.badge[1]}</small></span>
        </div>
        <div className="featured-event__content">
          <h3>{featured.title}</h3>
          <p><Icon name="pin" size={17} />{featured.place}</p>
          <p><Icon name="clock" size={17} />Kl. 10.00–18.00</p>
          <p className="featured-description">{activeMonth === "Oktober" ? "Välkommen till Harmoni Expo! Här hittar du rökelse, parfymoljor, kläder, smycken, hem & inredning och mycket mer." : "Upptäck våra handplockade indiska produkter, dofter och färgstarka textilier. Vi ser fram emot att träffa dig!"}</p>
          <button className="button" onClick={() => onEventSelect({ ...featured, time: "Kl. 10.00–18.00" })}>
            {activeMonth === "Oktober" ? "Läs mer om Harmoni Expo" : "Läs mer om marknaden"} <Icon name="arrow" size={16} />
          </button>
          <Lotus className="featured-event__ornament" />
        </div>
      </article>
      <div className="event-grid">
        {events.map((event, index) => <EventCard key={`${event.day}-${event.place}-${index}`} event={event} onDetails={onEventSelect} />)}
      </div>
      {monthEvents.length > 5 && (
        <button className="button button--outline more-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Visa färre datum" : `Visa fler datum i ${activeMonth.toLowerCase()}`} <Icon name="arrow" size={16} />
        </button>
      )}
    </section>
  );
}
