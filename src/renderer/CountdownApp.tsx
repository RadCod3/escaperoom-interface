import React, { useEffect, useState } from 'react';
import './components/kave-line.css';
import './App.css';

export default function CountdownApp() {
  const phase1Time = 20;
  const phase2Time = 10;

  const [time, setTime] = useState(phase1Time);
  const [startTimer, setStartTimer] = useState(false);
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const handleStartCountdown = () => {
      console.log('Starting countdown');
      setStartTimer(true);
    };

    // Add the event listener when the component mounts
    window.electron.ipcRenderer.on('start-countdown', handleStartCountdown);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeAllListeners('start-countdown');
    };
  }, []);

  useEffect(() => {
    const handleManualOverride = () => {
      console.log('Manual override');
      setStartTimer(false);
      setTimeout(() => {
        setPhase(2);
        setTime(phase2Time);
        window.electron.ipcRenderer.sendMessage('self-destruct', ['ping']);
        setStartTimer(true);
      }, 10000);
    };

    // Add the event listener when the component mounts
    window.electron.ipcRenderer.on('manual-override', handleManualOverride);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeAllListeners('manual-override');
    };
  }, []);

  useEffect(() => {
    if (time === 0 && startTimer) {
      setStartTimer(false);

      window.electron.ipcRenderer.sendMessage('countdown-completed', ['ping']);
    }
  }, [time, startTimer]);

  useEffect(() => {
    let timer;
    if (startTimer) {
      timer = setInterval(() => {
        console.log({ startTimer });
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer); // Clean up the interval when the component is unmounted
  }, [startTimer]);

  // Format the time into hours, minutes, and seconds
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const className = phase === 1 ? 'bg-image' : 'bg-image-red';
  return (
    <div className="home">
      <div className={className} />
      <div className="bg-content">
        <h1>{formatTime()}</h1>
      </div>
    </div>
  );
}
