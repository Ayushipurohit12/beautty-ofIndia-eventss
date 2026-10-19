import React from "react";
import { photo } from "../data/catalog.js";
import Icon from "./Icon.jsx";
import { formatPrice } from "../utils/formatPrice.js";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-card__image" style={{ backgroundImage: `url("${photo(product.image, 700)}")` }} />
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__footer">
          <strong>{formatPrice(product.price)}</strong>
          <button className="button" onClick={() => onAdd(product)}>
            Lägg i varukorg <Icon name="cart" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
