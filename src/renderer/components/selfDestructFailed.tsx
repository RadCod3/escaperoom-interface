import React, { useEffect } from 'react';
import { Typography } from '@mui/joy';
import useSound from 'use-sound';
import RoboFrame from './RoboFrame';
import tornadoSiren from '../../../assets/tornado_warning.mp3';

export default function SelfDestructFailed() {
  const [play] = useSound(tornadoSiren, { loop: true });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div>
      <RoboFrame
        style={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          margin: '5% auto',
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '90%',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            fontFamily: 'VT323, monospace',
            fontSize: '5rem',
          }}
          color="danger"
          level="h3"
        >
          GAME OVER
        </Typography>
        <Typography
          sx={{
            position: 'relative',
            margin: 'auto',
            width: '100%',
            marginTop: '20px',
            fontFamily: 'VT323, monospace',
          }}
          color="danger"
          level="h3"
        >
          The Lab Exploded.... <br />
          Better luck in your next life
        </Typography>
      </div>
    </div>
  );
}
