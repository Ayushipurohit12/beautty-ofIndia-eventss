import React from "react";
import { navigationItems } from "../data/catalog.js";
import Icon from "./Icon.jsx";
import Lotus from "./Lotus.jsx";

export default function Header({
  activePage,
  cartCount,
  menuOpen,
  onMenuToggle,
  onNavigate,
  onSearchOpen,
  onProfileOpen,
  onCartOpen,
}) {
  return (
    <header className="site-header">
      <a className="brand" href="#/hem" aria-label="Beauty of India startsida" onClick={() => onNavigate("hem")}>
        <span className="brand__seal"><Lotus /></span>
        <span className="brand__text"><strong>BEAUTY OF INDIA</strong><small>Din indiska bazar nära dig</small></span>
      </a>
      <button className="menu-toggle" aria-label="Öppna menyn" aria-expanded={menuOpen} onClick={onMenuToggle}>☰</button>
      <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Huvudmeny">
        {navigationItems.map((item) => (
          <a
            key={item.slug}
            href={`#/${item.slug}`}
            className={item.slug === activePage ? "is-active" : ""}
            aria-current={item.slug === activePage ? "page" : undefined}
            onClick={() => onNavigate(item.slug)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button aria-label="Sök" onClick={onSearchOpen}><Icon name="search" size={21} /></button>
        <button aria-label="Min profil" onClick={onProfileOpen}><Icon name="user" size={21} /></button>
        <button className="cart-button" aria-label={`Varukorg, ${cartCount} produkter`} onClick={onCartOpen}>
          <Icon name="cart" size={22} /><span>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
