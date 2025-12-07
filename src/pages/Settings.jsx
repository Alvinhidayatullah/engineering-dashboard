function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Settings</h1>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-gray-600 mb-6">Configure your dashboard settings here...</p>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-medium text-gray-800 mb-2">General Settings</h3>
            <p className="text-gray-600 text-sm">Basic dashboard configuration</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-medium text-gray-800 mb-2">Notifications</h3>
            <p className="text-gray-600 text-sm">Configure alert preferences</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-medium text-gray-800 mb-2">Security</h3>
            <p className="text-gray-600 text-sm">Password and access control</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
