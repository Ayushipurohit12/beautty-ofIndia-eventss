import React, { useEffect, useState } from "react";
import CartDrawer from "./components/CartDrawer.jsx";
import CollectionPage from "./components/CollectionPage.jsx";
import EventDetailsModal from "./components/EventDetailsModal.jsx";
import Header from "./components/Header.jsx";
import ProfileModal from "./components/ProfileModal.jsx";
import SearchModal from "./components/SearchModal.jsx";
import { collectionPages, navigationItems } from "./data/catalog.js";
import MarketsPage from "./pages/MarketsPage.jsx";
import useShopState from "./hooks/useShopState.js";

function getPageFromHash() {
  const page = window.location.hash.replace(/^#\/?/, "");
  if (page === "marknader" || Object.hasOwn(collectionPages, page)) return page;
  return "marknader";
}

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const shop = useShopState();

  useEffect(() => {
    const updatePage = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  useEffect(() => {
    const pageTitle = navigationItems.find((item) => item.slug === activePage)?.label ?? "Marknader";
    document.title = `${pageTitle} — Beauty of India`;
  }, [activePage]);

  const navigate = (page) => {
    const hash = `#/${page}`;
    setMenuOpen(false);

    if (window.location.hash === hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.hash = hash;
  };

  const openSearch = () => {
    shop.setSearchQuery("");
    shop.setSearchOpen(true);
  };

  const addToCartFromSearch = (product) => {
    shop.addToCart(product);
    shop.setSearchOpen(false);
  };

  return (
    <main>
      <Header
        activePage={activePage}
        cartCount={shop.cartCount}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((isOpen) => !isOpen)}
        onNavigate={navigate}
        onSearchOpen={openSearch}
        onProfileOpen={() => shop.setProfileOpen(true)}
        onCartOpen={() => shop.setCartOpen(true)}
      />

      {shop.cartMessage && (
        <div className="cart-toast" role="status">
          {shop.cartMessage}
          <button aria-label="Stäng meddelande" onClick={() => shop.setCartMessage("")}>×</button>
        </div>
      )}

      {activePage === "marknader"
        ? <MarketsPage onEventSelect={setSelectedEvent} />
        : <CollectionPage
            page={{ ...collectionPages[activePage], slug: activePage }}
            onNavigate={navigate}
            onAddToCart={shop.addToCart}
          />}

      <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {shop.searchOpen && (
        <SearchModal
          query={shop.searchQuery}
          results={shop.searchResults}
          onQueryChange={shop.setSearchQuery}
          onNavigate={(page) => {
            shop.setSearchOpen(false);
            navigate(page);
          }}
          onAdd={addToCartFromSearch}
          onClose={() => shop.setSearchOpen(false)}
        />
      )}

      {shop.profileOpen && (
        <ProfileModal
          name={shop.profileName}
          email={shop.profileEmail}
          form={shop.profileForm}
          onFormChange={shop.setProfileForm}
          onSubmit={shop.submitProfile}
          onReset={shop.resetProfile}
          onClose={() => shop.setProfileOpen(false)}
        />
      )}

      {shop.cartOpen && (
        <CartDrawer
          cart={shop.cart}
          cartCount={shop.cartCount}
          cartTotal={shop.cartTotal}
          onQuantityChange={shop.updateCartQuantity}
          onRemove={shop.removeFromCart}
          onCheckout={() => {
            shop.setCartOpen(false);
            shop.setCartMessage("Varukorgen är redo. Checkout och betalning är inte anslutna i denna demo.");
          }}
          onContinueShopping={() => {
            shop.setCartOpen(false);
            navigate("hem");
          }}
          onClose={() => shop.setCartOpen(false)}
        />
      )}
    </main>
  );
}
