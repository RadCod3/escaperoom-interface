import React, { useEffect } from 'react';
import { Typography } from '@mui/joy';
import useSound from 'use-sound';
import RoboFrame from './RoboFrame';
import missileExplosion from '../../../assets/missile_explode.gif';
import missileSound from '../../../assets/missile_sound.mp3';

export default function SelfDestructFailed() {
  const [play] = useSound(missileSound);

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
          width: '70%',
          margin: 'auto',
        }}
      >
        <img src={missileExplosion} alt="missile explosion" />
        <Typography
          sx={{
            position: 'relative',
            margin: 'auto',
            width: '100%',
            marginTop: '20px',
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
