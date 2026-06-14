import React from "react";

const OfferPopupCard = () => {
  return (
    <a
      href="https://meesho-offer.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        background: "#ffffff",
        width: "100%",
        maxWidth: "440px",
        borderRadius: "40px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        padding: "40px 30px",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        margin: "20px auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h1 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "2px", color: "#000", marginBottom: "25px", textTransform: "uppercase" }}>
        Welcome
      </h1>

      <div style={{ background: "#fff", borderRadius: "24px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)", border: "1px solid #f1f1f1", padding: "16px", marginBottom: "25px", textAlign: "left" }}>
        <div style={{ backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "16px", marginBottom: "16px", display: "flex", justifyContent: "center" }}>
          <img
            src="/Gemini_Generated_Image_mgf77cmgf77cmgf7.webp"
            alt="Dry Fruits Mix"
            style={{ width: "100%", maxHeight: "220px", objectFit: "contain", borderRadius: "12px" }}
            onError={(e) => (e.target.src = "https://via.placeholder.com/220?text=Product")}
          />
        </div>
        <div style={{ fontSize: "15px", fontWeight: 600, color: "#2c2c2c", lineHeight: 1.4, marginBottom: "8px" }}>
          (4KG - 1Kg*4) Dry Fruits Combo Pack of 4 - (Almonds, Cashews,...
        </div>
        <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
          <span style={{ backgroundColor: "#388e3c", color: "white", fontSize: "11px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px" }}>4.4 ★</span>
          <span style={{ fontSize: "12px", color: "#878787" }}>(4,320 Ratings)</span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <span style={{ fontSize: "22px", fontWeight: 700, color: "#000" }}>₹199</span>
          <span style={{ fontSize: "14px", color: "#878787", textDecoration: "line-through" }}>₹5999</span>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#388e3c" }}>97% off</span>
        </div>
      </div>

      <p style={{ fontSize: "15px", color: "#666", marginBottom: "30px" }}>Welcome to our Dryfruit and Grocery Store</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "14px", color: "#555" }}>
        🔒 Secure Payment by
        <img src="https://razorpay.com/assets/razorpay-logo.svg" style={{ height: "16px" }} alt="Razorpay" />
        <span style={{ borderLeft: "1px solid #ddd", paddingLeft: "8px", marginLeft: "4px", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "9px" }}>
          <span style={{ width: "16px", height: "16px", background: "#2f6df6", color: "#fff", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>✓</span>
          <span>
            <b style={{ color: "#2954c8" }}>Trusted & Secure</b><br />
            <span style={{ color: "#5f7fe5" }}>100% Safe Payments</span>
          </span>
        </span>
      </div>
    </a>
  );
};

export default OfferPopupCard;
