import React, { useState, useEffect, useCallback, Fragment } from "react";
// Import your existing components (adjust paths as needed)
import W1 from "./W1";           // Header component
import Zd from "./Zd";           // Cart sidebar
import tm from "./tm";           // Product listing
import jm from "./jm";           // Footer
import OfferPopupCard from "./OfferPopupCard"; // New promo card

// Custom hook to detect desktop view
const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
};

const HomePage = () => {
  // State and logic from your original minified code
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("nexshop_products");
      return saved ? JSON.parse(saved) : gs; // gs = default product list
    } catch {
      return gs;
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("nexshop_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });
  const [toasts, setToasts] = useState([]);

  const isDesktop = useDesktop();

  // Helper: show toast message
  const showToast = useCallback((msg) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2000);
  }, []);

  // Add to cart
  const addToCart = useCallback(
    (product) => {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }
        return [...prev, { ...product, qty: 1 }];
      });
      showToast("Added to cart!");
      // FB pixel event (if needed)
      if (window.fbq) {
        window.fbq("track", "AddToCart", {
          content_name: product.name,
          value: parseFloat(product.sellPrice.replace(/[₹,]/g, "")),
          currency: "INR",
        });
      }
    },
    [showToast]
  );

  // Update cart quantity
  const updateQuantity = useCallback((id, newQty) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
      );
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("nexshop_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Fragment>
      {/* Header */}
      <W1 cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      {/* Cart Sidebar */}
      <Zd
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQty={updateQuantity}
      />

      {/* Promotional Card – only on desktop */}
      {isDesktop && <OfferPopupCard />}

      {/* Product Listing */}
      {tm({ products, onAddToCart: addToCart })}

      {/* Footer */}
      <jm />

      {/* Toast notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            {toast.msg}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HomePage;
