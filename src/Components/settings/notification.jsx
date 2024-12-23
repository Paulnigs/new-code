import React, { useState } from 'react';

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleSave = () => {
    // Mock saving the settings
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-purple-300 border-x-2 mt-20 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
      <p className="text-gray-600 mb-6">
        Manage your notification preferences below. You can choose how you want to stay informed.
      </p>

      <div className="space-y-4">
        {/* Email Notifications */}
        <div className="flex items-center justify-between">
          <label htmlFor="emailNotifications" className="text-lg font-medium text-gray-700">
            Email Notifications
          </label>
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>

        {/* SMS Notifications */}
        <div className="flex items-center justify-between">
          <label htmlFor="smsNotifications" className="text-lg font-medium text-gray-700">
            SMS Notifications
          </label>
          <input
            type="checkbox"
            id="smsNotifications"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>

        {/* Push Notifications */}
        <div className="flex items-center justify-between">
          <label htmlFor="pushNotifications" className="text-lg font-medium text-gray-700">
            Push Notifications
          </label>
          <input
            type="checkbox"
            id="pushNotifications"
            checked={pushNotifications}
            onChange={() => setPushNotifications(!pushNotifications)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-purple-400 text-white py-2 px-4 rounded-lg hover:bg-purple-500"
      >
        Save Changes
      </button>
    </div>
  );
};

export default NotificationSettings;
