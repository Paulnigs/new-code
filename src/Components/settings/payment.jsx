import React from "react";

const SubscriptionAndPayment = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-5xl mt-20 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold pb-3">Subscription & Payment</h2>
        <button className="px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 focus:outline-none">Update Plan</button>
      </div>

      {/* Current Plan Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Current Plan</h3>
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-gray-800 font-semibold">Pro Plan</p>
            <p className="text-gray-500 text-sm">$29.99 / month</p>
          </div>
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Active</span>
          </div>
        </div>
      </div>

      {/* Billing Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Billing Details</h3>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Cardholder Name:</span> John Doe
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Card Number:</span> **** **** **** 1234
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Expiry Date:</span> 12/24
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Billing Address:</span> 123 Main Street, City, Country
          </p>
        </div>
      </div>

      {/* Payment History Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Payment History</h3>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 text-gray-600 font-medium">Date</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Description</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Amount</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">2024-01-15</td>
                <td className="px-4 py-2">Monthly Subscription</td>
                <td className="px-4 py-2">$29.99</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Paid</span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">2023-12-15</td>
                <td className="px-4 py-2">Monthly Subscription</td>
                <td className="px-4 py-2">$29.99</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Paid</span>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Method Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">Payment Methods</h3>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-700">
              <span className="font-medium">Visa</span> ending in 1234
            </p>
            <button className="text-indigo-600 hover:text-indigo-800">Remove</button>
          </div>
          <button className="px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 focus:outline-none">
            Add New Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAndPayment;
