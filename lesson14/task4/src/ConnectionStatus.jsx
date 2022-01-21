import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleOffline = () => {
      setStatus('offline');
    };

    const handleOnline = () => {
      setStatus('online');
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [status]);

  return <div className={`status ${status === 'offline' ? ' status_offline' : ''}`}>{status}</div>;
};

export default ConnectionStatus;
