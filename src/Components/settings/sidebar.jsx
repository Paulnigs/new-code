import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-300 text-black flex flex-col p-6 overflow-y-scroll top-3 sticky">
      <h1 className="text-2xl font-bold mb-6 border-b-2 pt-10">My Settings</h1>
      <div className="space-y-3">
        <p className="hover:bg-gray-700 p-2 rounded cursor-pointer text-black hover:text-white">Password Management</p>
        <p className="hover:bg-gray-700 p-2 rounded cursor-pointer text-black hover:text-white">2FA</p>
        <p className="hover:bg-gray-700 p-2 rounded cursor-pointer text-black hover:text-white">Notification</p>
        <p className="hover:bg-gray-700 p-2 rounded cursor-pointer text-black hover:text-white">Subscription and Payment</p>
        <p className="hover:bg-gray-700 p-2 rounded cursor-pointer text-black hover:text-white">Personalization</p>
      </div>
    </div>
  );
};

export default Sidebar;
