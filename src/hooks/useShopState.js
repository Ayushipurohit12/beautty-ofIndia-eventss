import { useState } from "react";
import { collectionPages, shopProducts } from "../data/catalog.js";

export default function useShopState() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [profileForm, setProfileForm] = useState({ name: "", email: "" });
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState("");

  const searchResults = searchQuery.trim()
    ? shopProducts.filter((product) =>
        `${product.name} ${product.description} ${collectionPages[product.category].title}`
          .toLocaleLowerCase("sv")
          .includes(searchQuery.trim().toLocaleLowerCase("sv")),
      )
    : [];

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => {
    const product = shopProducts.find((candidate) => candidate.id === item.productId);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.productId === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...currentCart, { productId: product.id, quantity: 1 }];
    });
    setCartMessage(`${product.name} har lagts i varukorgen.`);
  };

  const updateCartQuantity = (productId, change) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => item.productId === productId ? { ...item, quantity: item.quantity + change } : item)
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.productId !== productId));
  };

  const submitProfile = (event) => {
    event.preventDefault();
    setProfileName(profileForm.name.trim());
    setProfileEmail(profileForm.email.trim());
  };

  const resetProfile = () => {
    setProfileName("");
    setProfileEmail("");
    setProfileForm({ name: "", email: "" });
  };

  return {
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    searchResults,
    profileOpen,
    setProfileOpen,
    profileName,
    profileEmail,
    profileForm,
    setProfileForm,
    submitProfile,
    resetProfile,
    cartOpen,
    setCartOpen,
    cart,
    cartCount,
    cartTotal,
    cartMessage,
    setCartMessage,
    addToCart,
    updateCartQuantity,
    removeFromCart,
  };
}
