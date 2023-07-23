import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Animator } from '@arwes/react-animator';
import { Dots } from '@arwes/react-bgs';
import { Illuminator } from '@arwes/react-frames';
import './kave-line.css';
import RoboFrame from './RoboFrame';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(true);

  useEffect(() => {
    const iid = setInterval(() => setActive((x) => !x), 3000);
    return () => clearInterval(iid);
  }, []);

  return (
    <Animator active={active} duration={{ enter: 2, exit: 2 }}>
      <div className="home">
        <div className="bg-image" />
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
                onClick={() => navigate('/projects')}
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
