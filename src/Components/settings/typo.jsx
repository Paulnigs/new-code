import React, { useState } from "react";
import Password from './password';
import Sidebar from "./sidebar";

const Typo = () => {
  const [activeTab, setActiveTab] = useState("Password Management");

  const renderComponent = () => {
    switch (activeTab) {
      case "Password Management":
        return <Password />;
      case "2FA":
        return <TwoFactorAuth />;
      case "Notification":
        return <Notification />;
      case "Subscription and Payment":
        return <Subscription />;
      case "Personalization":
        return <Personalization />;
      default:
        return <Password />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar />
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md">
        <ul className="flex flex-col">
          {["Password Management", "2FA", "Notification", "Subscription and Payment", "Personalization"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-4 cursor-pointer text-center ${
                activeTab === tab ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
        {renderComponent()}
      </div>
    </div>
  );
};


<Password />

const TwoFactorAuth = () => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
    <p>Setup your two-factor authentication settings here.</p>
  </div>
);

const Notification = () => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
    <p>Manage your notification preferences here.</p>
  </div>
);

const Subscription = () => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-2">Subscription and Payment</h3>
    <p>Manage your subscription and payment details here.</p>
  </div>
);

const Personalization = () => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-2">Personalization</h3>
    <p>Customize your profile and preferences here.</p>
  </div>
);

export default Typo;
