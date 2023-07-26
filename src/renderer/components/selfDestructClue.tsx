import React, { useEffect } from 'react';
import { Typography } from '@mui/joy';
import useSound from 'use-sound';
import RoboFrame from './RoboFrame';
import clueMap from '../../../assets/icon.png';
import dangerAlarm from '../../../assets/Danger-alarm-sound.mp3';

export default function SelfDestructClue() {
  const [play] = useSound(dangerAlarm, { loop: true });

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
        <img src={clueMap} alt="map" />
      </div>
    </div>
  );
}
