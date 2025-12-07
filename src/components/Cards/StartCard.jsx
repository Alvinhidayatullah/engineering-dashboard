function StatCard({ title, value, change, color = "#3b82f6" }) {
  const isPositive = change && change.startsWith("+");

  const icon = title.includes("Revenue") ? "💰" : title.includes("Orders") ? "📦" : title.includes("Customers") ? "👥" : "👀";

  return (
    <div className="stat-card" style={{ borderLeftColor: color }}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: color }}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          <div className="flex items-end justify-between mt-4">
            <div className="text-2xl font-bold text-gray-800">{value}</div>
            {change && (
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                <span>{isPositive ? "↗" : "↘"}</span>
                <span>{change}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
