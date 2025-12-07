function Analytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📈 Analytics Dashboard</h1>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-gray-600">Advanced analytics and insights coming soon...</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-700">User Engagement</h3>
            <p className="text-2xl font-bold mt-2">87%</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-700">Conversion Rate</h3>
            <p className="text-2xl font-bold mt-2">3.2%</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-medium text-purple-700">Avg. Session</h3>
            <p className="text-2xl font-bold mt-2">4m 32s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
