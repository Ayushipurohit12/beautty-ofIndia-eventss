import React from "react";
import Icon from "./Icon.jsx";

export default function EventDetailsModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="event-modal" role="dialog" aria-modal="true" aria-labelledby="event-modal-title" onClick={(clickEvent) => clickEvent.stopPropagation()}>
        <button className="modal-close" aria-label="Stäng" onClick={onClose}>×</button>
        <p className="eyebrow">VÄLKOMMEN ATT BESÖKA OSS</p>
        <h2 id="event-modal-title">{event.title ?? event.place}</h2>
        <p><Icon name="calendar" size={17} />{event.date}</p>
        <p><Icon name="clock" size={17} />{event.time ?? "Kl. 12.00–18.00"}</p>
        <p><Icon name="pin" size={17} />{event.place}</p>
        <p>Upptäck dofter, färger och handplockade favoriter från Indien. Vi ser fram emot att träffa dig!</p>
        <button className="button" onClick={onClose}>Stäng <Icon name="arrow" size={16} /></button>
      </section>
    </div>
  );
}
