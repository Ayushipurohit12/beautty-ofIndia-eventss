import React from "react";
import { monthAbbreviations, photo } from "../data/catalog.js";
import Icon from "./Icon.jsx";

export default function EventCard({ event, onDetails }) {
  const dateParts = event.date.split(" ");
  const dateMonth = monthAbbreviations[dateParts.at(-1).toLowerCase()] ?? "DATUM";

  return (
    <article className="event-card">
      <div className="event-card__photo" style={{ backgroundImage: `url("${photo(event.image, 520)}")` }}>
        <div className="date-badge"><strong>{event.day}</strong><span>{dateMonth}</span></div>
      </div>
      <div className="event-card__body">
        <h3>{event.title ?? event.place.split(",")[0].replace(/ centrum$/i, "").replace(/s torg$/i, "")}</h3>
        <p><Icon name="calendar" size={14} />{event.date}</p>
        <p><Icon name="clock" size={14} />Kl. 12.00–18.00</p>
        <p><Icon name="pin" size={14} />{event.place}</p>
        <button className="button button--small" onClick={() => onDetails(event)}>
          Se plats <Icon name="arrow" size={15} />
        </button>
      </div>
    </article>
  );
}
