import React from "react";
import Icon from "./Icon.jsx";

export default function ProfileModal({
  name,
  email,
  form,
  onFormChange,
  onSubmit,
  onReset,
  onClose,
}) {
  return (
    <div className="overlay" role="presentation" onClick={onClose}>
      <section className="profile-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" aria-label="Stäng profil" onClick={onClose}>×</button>
        <div className="profile-icon"><Icon name="user" size={27} /></div>
        <p className="eyebrow">BEAUTY OF INDIA</p>
        <h2 id="profile-title">{name ? `Välkommen, ${name}!` : "Min profil"}</h2>
        {name ? <>
          <p className="profile-email">{email}</p>
          <p className="profile-note">Din profil visas i den här webbläsarsessionen.</p>
          <button className="button button--outline" onClick={onReset}>Byt profil</button>
        </> : <>
          <p className="profile-note">Fyll i dina uppgifter för att visa din profil.</p>
          <form className="profile-form" onSubmit={onSubmit}>
            <label htmlFor="profile-name">Namn</label>
            <input id="profile-name" autoComplete="name" value={form.name} onChange={(event) => onFormChange({ ...form, name: event.target.value })} required />
            <label htmlFor="profile-email">E-postadress</label>
            <input id="profile-email" type="email" autoComplete="email" value={form.email} onChange={(event) => onFormChange({ ...form, email: event.target.value })} required />
            <button className="button" type="submit">Visa min profil <Icon name="arrow" size={16} /></button>
          </form>
          <p className="profile-note profile-note--small">Demo: profiluppgifterna skickas inte till någon tjänst.</p>
        </>}
      </section>
    </div>
  );
}
