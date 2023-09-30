import { Typography } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoboFrame from './RoboFrame';

export default function Stark(props: { missileActive: boolean }) {
  const navigate = useNavigate();
  const { missileActive } = props;
  return (
    <div>
      <RoboFrame style={{ width: '70%', height: '60%', margin: '7% auto' }} />
      <div style={{ position: 'relative', width: '50%', margin: 'auto' }}>
        <h1>Project</h1>
        <h2>STARK</h2>
        <p>
          In a world on the brink of global conflict, governments unite in a
          top-secret research initiative known as Project STARK. Faced with
          escalating international tensions, STARK seeks to develop a
          devastatingly powerful weapon system capable of strategic precision
          and reconnaissance to gain the upper hand in potential conflicts.
          Utilizing advanced technologies and cutting-edge weaponry, STARK aims
          to create a missile system that can launch targeted strikes on any
          location worldwide, causing casualties on a scale of millions.
        </p>
        <p>
          Dr. Strausland, Prof. Truman, Dr. Adams, Dr. Rutherford, and Prof.
          Kowalski
        </p>
        <p>2021</p>
        <p>
          STATUS:{' '}
          <Typography
            color={missileActive ? 'danger' : 'success'}
            variant="solid"
          >
            {missileActive ? 'LAUNCHED' : 'INACTIVE'}
          </Typography>
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <button
            className="kave-btn"
            type="button"
            onClick={() => navigate('/manualOverride')}
          >
            <span className="kave-line" />
            Manual Override
          </button>
          <button
            className="kave-btn"
            type="button"
            onClick={() => navigate('/projects')}
          >
            <span className="kave-line" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
