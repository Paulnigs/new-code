// PasswordManagement.js
import React, { useState } from 'react';

const PasswordManagement = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    evaluatePasswordStrength(value);
  };

  const evaluatePasswordStrength = (password) => {
    const strengthLevels = ['Weak', 'Moderate', 'Strong'];
    const regexWeak = /.{6,}/;
    const regexModerate = /(?=.*[0-9])(?=.*[a-zA-Z]).{8,}/;
    const regexStrong = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,}/;

    if (regexStrong.test(password)) setPasswordStrength(strengthLevels[2]);
    else if (regexModerate.test(password)) setPasswordStrength(strengthLevels[1]);
    else if (regexWeak.test(password)) setPasswordStrength(strengthLevels[0]);
    else setPasswordStrength('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    alert('Password updated successfully!');
  };

  return (
    <div className="max-w-5xl pt-16 mx-auto mt-20 p-6 bg-purple-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Password Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">New Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
          <p className={`mt-2 text-sm ${passwordStrength === 'Strong' ? 'text-green-600' : passwordStrength === 'Moderate' ? 'text-yellow-600' : 'text-red-600'}`}>
            {passwordStrength ? `Strength: ${passwordStrength}` : 'Enter a password to check strength'}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="showPassword" className="text-gray-700">Show Passwords</label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-400 text-white py-2 px-4 rounded-lg hover:bg-purple-500"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default PasswordManagement;
