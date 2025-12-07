function PieChart() {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "conic-gradient(#0088FE 0% 40%, #00C49F 40% 70%, #FFBB28 70% 85%, #FF8042 85% 95%, #8884D8 95% 100%)",
          margin: "0 auto",
        }}
      ></div>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
        {["Electronics", "Fashion", "Home", "Books", "Others"].map((cat, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "12px", height: "12px", background: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"][i] }}></div>
            <span style={{ fontSize: "14px" }}>{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChart;
