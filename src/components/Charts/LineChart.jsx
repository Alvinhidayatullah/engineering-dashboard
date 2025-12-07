function LineChart() {
  return (
    <div
      style={{
        padding: "20px",
        background: "#f8f9fa",
        borderRadius: "8px",
        height: "300px",
        display: "flex",
        alignItems: "flex-end",
        gap: "20px",
      }}
    >
      {[65, 45, 75, 55, 85, 65, 95].map((height, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: `${height}%`,
              width: "30px",
              background: "#1890ff",
              borderRadius: "4px 4px 0 0",
            }}
          ></div>
          <span style={{ marginTop: "8px", fontSize: "12px" }}>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}</span>
        </div>
      ))}
    </div>
  );
}

export default LineChart;
