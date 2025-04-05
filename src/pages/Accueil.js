import React from "react";
import { useNavigate } from "react-router-dom";

function Accueil() {
  const navigate = useNavigate();

  const handleGoToClient = () => {
    navigate("/produits");
  };

  // Chemin relatif vers votre image dans public/assets/images
  const backgroundImageUrl = "/assets/images/Mada2.jpg";

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "0 20px",
        position: "relative"
      }}
    >
      <h1 style={{ 
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: "bold",
        marginBottom: "20px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
      }}>
        🇲🇬 Tonga soa eto amin'ny tranonkala!
      </h1>
      
      <p style={{ 
        fontSize: "clamp(1rem, 3vw, 1.3rem)",
        maxWidth: "600px",
        marginBottom: "30px",
        textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
      }}>
        Découvrez les merveilles de Madagascar, à portée de clic – pour les Malagasy d'ici et d'ailleurs.
      </p>
      
      <button
        onClick={handleGoToClient}
        style={{
          backgroundColor: "#d32f2f",
          color: "white",
          padding: "15px 40px",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          fontWeight: "600",
          ":hover": {
            transform: "translateY(-3px)",
            backgroundColor: "#b71c1c",
            boxShadow: "0 6px 12px rgba(0,0,0,0.4)"
          }
        }}
      >
        Voir les produits
      </button>
    </div>
  );
}

export default Accueil;