export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: 40,
      fontFamily: "sans-serif",
      background: "linear-gradient(to bottom, #0b1220, #0f172a)",
      color: "white"
    }}>
      
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "linear-gradient(135deg, #facc15, #22c55e)"
        }} />
        
        <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
          SAHOLAR
        </h1>
      </div>

      {/* Hero Section */}
      <div style={{ marginTop: 60, textAlign: "center" }}>
        
        <h2 style={{ fontSize: 36, fontWeight: "bold" }}>
          Design Solar Systems in Minutes
        </h2>

        <p style={{ marginTop: 15, fontSize: 18, opacity: 0.8 }}>
          Professional Off-Grid Solar Calculation Engine
        </p>

        {/* Hero Image */}
        <div style={{ marginTop: 40 }}>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
            style={{
              width: "100%",
              maxWidth: 800,
              borderRadius: 16,
              margin: "0 auto"
            }}
          />
        </div>

        {/* Button */}
        <div style={{ marginTop: 40 }}>
          <button style={{
            padding: "14px 24px",
            background: "#22c55e",
            color: "black",
            borderRadius: 10,
            fontWeight: "bold",
            fontSize: 16,
            border: "none",
            cursor: "pointer"
          }}>
            Start Free Design
          </button>
        </div>

      </div>
    </main>
  );
}
