import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/joy/Input';
import RoboFrame from './RoboFrame';
import RubikCubeGIF from '../../../assets/rubik.gif';

export default function ManualOverride(props: {
  setMissileActive: (arg0: boolean) => void;
}) {
  const [code1, setCode1] = useState('');
  const [code1Correct, setCode1Correct] = useState(false);
  const navigate = useNavigate();
  const { setMissileActive } = props;

  const submitHandler = () => {
    if (code1 === '1234') {
      setCode1Correct(true);
      setMissileActive(false);
      window.electron.ipcRenderer.sendMessage('manual-override', ['ping']);
      navigate('/stark');
    } else {
      setCode1Correct(false);
    }
  };

  return (
    <div>
      <RoboFrame style={{ width: '50vw', height: '50vh', margin: '7% auto' }} />
      <div
        style={{
          position: 'relative',
          width: '30vw',
          height: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Manual Override</h1>
        <h2>Enter codes to override the system</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <Input
            value={code1}
            onChange={(e) => setCode1(e.target.value)}
            color={code1Correct ? 'success' : 'danger'}
            type="password"
            placeholder="Code 1"
          />
          <img
            src={RubikCubeGIF}
            alt="rubik cube"
            style={{
              width: '50px',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
            marginTop: '20px',
          }}
        >
          <button className="kave-btn" type="button" onClick={submitHandler}>
            <span className="kave-line" />
            Submit
          </button>
          <button
            className="kave-btn"
            type="button"
            onClick={() => navigate(-1)}
          >
            <span className="kave-line" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
