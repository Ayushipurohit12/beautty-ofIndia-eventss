import React from "react";
import { photo } from "../data/catalog.js";
import { formatPrice } from "../utils/formatPrice.js";
import Icon from "./Icon.jsx";

export default function SearchModal({ query, results, onQueryChange, onNavigate, onAdd, onClose }) {
  return (
    <div className="overlay" role="presentation" onClick={onClose}>
      <section className="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" aria-label="Stäng sökning" onClick={onClose}>×</button>
        <p className="eyebrow">BEAUTY OF INDIA</p>
        <h2 id="search-title">Sök i sortimentet</h2>
        <label className="visually-hidden" htmlFor="product-search">Sök efter produkter</label>
        <div className="search-input-wrap">
          <Icon name="search" size={20} />
          <input id="product-search" autoFocus type="search" placeholder="Sök efter t.ex. rökelse eller smycken" value={query} onChange={(event) => onQueryChange(event.target.value)} />
        </div>
        <div className="search-results" aria-live="polite">
          {!query.trim()
            ? <p className="search-hint">Skriv ett namn eller en kategori för att hitta produkter.</p>
            : results.length
              ? results.map((product) => (
                  <article className="search-result" key={product.id}>
                    <button className="search-result__product" onClick={() => onNavigate(product.category)}>
                      <span className="search-result__image" style={{ backgroundImage: `url("${photo(product.image, 180)}")` }} />
                      <span><strong>{product.name}</strong><small>{formatPrice(product.price)}</small></span>
                    </button>
                    <button className="button button--small" onClick={() => onAdd(product)}>Lägg till</button>
                  </article>
                ))
              : <p className="search-hint">Inga produkter hittades. Prova ett annat sökord.</p>}
        </div>
      </section>
    </div>
  );
}
