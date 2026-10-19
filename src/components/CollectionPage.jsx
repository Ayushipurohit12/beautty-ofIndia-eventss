import React from "react";
import { photo, shopProducts } from "../data/catalog.js";
import Icon from "./Icon.jsx";
import Lotus from "./Lotus.jsx";
import ProductCard from "./ProductCard.jsx";

export default function CollectionPage({ page, onNavigate, onAddToCart }) {
  const products = shopProducts.filter((product) =>
    page.slug === "hem" || page.slug === "om-oss" ? true : product.category === page.slug,
  );

  return (
    <section className="collection-page">
      <div className="collection-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(251,245,238,.96) 0%, rgba(251,245,238,.82) 44%, rgba(251,245,238,.08) 100%), url("${photo(page.image, 1400)}")` }}>
        <div className="collection-hero__content">
          <p className="eyebrow">BEAUTY OF INDIA</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          <button className="button" onClick={() => onNavigate("marknader")}>Upptäck våra marknader <Icon name="arrow" size={16} /></button>
        </div>
      </div>
      <div className="collection-content">
        <h2>{page.products ? "Upptäck vårt sortiment" : page.title}</h2>
        <div className="title-flourish"><span /><Lotus /><span /></div>
        <div className="collection-grid">
          {page.products.map((item) => (
            <article className="collection-card" key={item.name}>
              <div className="collection-card__image" style={{ backgroundImage: `url("${photo(item.image, 700)}")` }} />
              <div className="collection-card__body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.link && <button className="button button--outline" onClick={() => onNavigate(item.link)}>Upptäck mer <Icon name="arrow" size={15} /></button>}
              </div>
            </article>
          ))}
        </div>
      </div>
      <section className="shop-section">
        <h2>{page.slug === "hem" || page.slug === "om-oss" ? "Handplockade favoriter" : `Handla ${page.title.toLowerCase()}`}</h2>
        <div className="title-flourish"><span /><Lotus /><span /></div>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAddToCart} />)}
        </div>
      </section>
    </section>
  );
}
