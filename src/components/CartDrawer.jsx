import React from "react";
import { photo, shopProducts } from "../data/catalog.js";
import { formatPrice } from "../utils/formatPrice.js";
import Icon from "./Icon.jsx";

export default function CartDrawer({
  cart,
  cartCount,
  cartTotal,
  onQuantityChange,
  onRemove,
  onCheckout,
  onContinueShopping,
  onClose,
}) {
  return (
    <div className="overlay overlay--cart" role="presentation" onClick={onClose}>
      <aside className="cart-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title" onClick={(event) => event.stopPropagation()}>
        <div className="cart-panel__header">
          <div><p className="eyebrow">BEAUTY OF INDIA</p><h2 id="cart-title">Din varukorg <span>({cartCount})</span></h2></div>
          <button className="modal-close" aria-label="Stäng varukorg" onClick={onClose}>×</button>
        </div>
        {cart.length ? <>
          <div className="cart-items">
            {cart.map((item) => {
              const product = shopProducts.find((candidate) => candidate.id === item.productId);
              if (!product) return null;
              return (
                <article className="cart-item" key={item.productId}>
                  <div className="cart-item__image" style={{ backgroundImage: `url("${photo(product.image, 220)}")` }} />
                  <div className="cart-item__details">
                    <h3>{product.name}</h3>
                    <p>{formatPrice(product.price)}</p>
                    <div className="quantity-control">
                      <button aria-label={`Minska antal ${product.name}`} onClick={() => onQuantityChange(item.productId, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Öka antal ${product.name}`} onClick={() => onQuantityChange(item.productId, 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-item" aria-label={`Ta bort ${product.name}`} onClick={() => onRemove(item.productId)}>Ta bort</button>
                </article>
              );
            })}
          </div>
          <div className="cart-summary">
            <p><span>Delsumma</span><strong>{formatPrice(cartTotal)}</strong></p>
            <small>Frakt beräknas vid kassan.</small>
            <button className="button" onClick={onCheckout}>Fortsätt till kassan <Icon name="arrow" size={16} /></button>
          </div>
        </> : (
          <div className="cart-empty">
            <Icon name="cart" size={34} />
            <h3>Din varukorg är tom</h3>
            <p>Lägg till en favorit från sortimentet så visas den här.</p>
            <button className="button" onClick={onContinueShopping}>Upptäck sortimentet <Icon name="arrow" size={16} /></button>
          </div>
        )}
      </aside>
    </div>
  );
}
