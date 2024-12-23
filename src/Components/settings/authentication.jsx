import React, { useState } from "react";

const TwoFactorAuthentication = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [backupCodes, setBackupCodes] = useState([]);

  const handleEnable2FA = () => {
    // Simulate enabling 2FA and generating a QR code
    setIsEnabled(true);
    setQrCode("https://via.placeholder.com/150?text=QR+Code"); // Replace with actual QR code generation
    setBackupCodes(["1234-5678", "8765-4321", "5678-1234"]);
  };

  const handleDisable2FA = () => {
    setIsEnabled(false);
    setQrCode("");
    setBackupCodes([]);
  };

  return (
    <div className="p-6 mt-20 bg-white shadow rounded-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Two-Factor Authentication</h2>
      <p className="text-gray-600 mb-6">
        Enhance your account security by enabling two-factor authentication (2FA).
      </p>

      {isEnabled ? (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-black">2FA Enabled</h3>
            <p className="text-gray-600">
              Use the QR code below to configure your authenticator app:
            </p>
            <div className="mt-4">
              <img src={qrCode} alt="QR Code" className="w-32 h-32 border rounded" />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-black">Backup Codes</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              {backupCodes.map((code, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-md">
                  {code}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleDisable2FA}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
          >
            Disable 2FA
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-600 mb-4">
            Two-factor authentication is currently disabled.
          </p>
          <button
            onClick={handleEnable2FA}
            className="px-4 py-2 bg-purple-400 text-white font-semibold rounded hover:bg-purple-500"
          >
            Enable 2FA
          </button>
        </div>
      )}
    </div>
  );
};

export default TwoFactorAuthentication;
