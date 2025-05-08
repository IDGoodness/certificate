// import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotAllowed = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/Five');
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied!</h1>
        <p className="text-lg text-gray-700 mb-6">
          You do not have permission to download the certificate.
        </p>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-800"
        >
          Go Back to Home
        </button>
      </div>
    );
};

export default NotAllowed;