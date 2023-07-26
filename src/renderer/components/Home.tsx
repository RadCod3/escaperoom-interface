import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Animator } from '@arwes/react-animator';
import { Dots } from '@arwes/react-bgs';
import { Illuminator } from '@arwes/react-frames';
import './kave-line.css';
import RoboFrame from './RoboFrame';

export default function Home(props: { missileActive: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { missileActive } = props;
  const [selfDestruct, setSelfDestruct] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const iid = setInterval(() => setActive((x) => !x), 3000);
    return () => clearInterval(iid);
  }, []);

  useEffect(() => {
    const handleCountdownCompleted = () => {
      console.log('boom');
      if (missileActive) {
        navigate('/FailedMissile');
      } else if (selfDestruct) {
        navigate('/selfDestructFailed');
      }
    };

    // Add the event listener when the component mounts
    window.electron.ipcRenderer.on(
      'countdown-completed',
      handleCountdownCompleted
    );

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeAllListeners('countdown-completed');
    };
  }, [navigate, missileActive, selfDestruct]);

  useEffect(() => {
    const handleSelfDestruct = () => {
      console.log('self destruct');
      setSelfDestruct(true);
      navigate('/selfDestructClue');
    };

    // Add the event listener when the component mounts
    window.electron.ipcRenderer.on('self-destruct', handleSelfDestruct);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeAllListeners('self-destruct');
    };
  }, [navigate]);

  const className = selfDestruct ? 'bg-image-red' : 'bg-image';

  return (
    <Animator active={active} duration={{ enter: 2, exit: 2 }}>
      <div className="home">
        <div className={className} />
        <Illuminator color="hsl(180 50% 50% / 20%)" size={300} />
        <Dots color="hsla(180, 100%, 75%, 0.4)" />
        <div className="bg-content">
          {location.pathname === '/' ? (
            <>
              <RoboFrame
                style={{
                  position: 'absolute',
                  width: '40%',
                  height: '30%',
                  margin: '5% auto',
                }}
              />
              <button
                className="kave-btn"
                type="button"
                onClick={() => {
                  window.electron.ipcRenderer.sendMessage('start-countdown', [
                    'ping',
                  ]);
                  navigate('/projects');
                }}
              >
                <span className="kave-line" />
                Projects
              </button>
            </>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </Animator>
  );
}
