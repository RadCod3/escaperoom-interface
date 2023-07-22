import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/joy/Input';

export default function ManualOverride(props: {
  setMissileActive: (arg0: boolean) => void;
}) {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code1Correct, setCode1Correct] = useState(false);
  const [code2Correct, setCode2Correct] = useState(false);
  const navigate = useNavigate();
  const { setMissileActive } = props;

  const submitHandler = () => {
    if (code1 === '1234') {
      setCode1Correct(true);
    } else {
      setCode1Correct(false);
    }
    if (code2 === '5678') {
      setCode2Correct(true);
    } else {
      setCode2Correct(false);
    }

    if (code1 === '1234' && code2 === '5678') {
      setMissileActive(false);
      navigate('/stark');
    }
  };

  return (
    <div>
      <h1>Manual Override</h1>
      <h2>Enter codes to override the system</h2>
      <Input
        value={code1}
        onChange={(e) => setCode1(e.target.value)}
        color={code1Correct ? 'success' : 'danger'}
        type="password"
        placeholder="Code 1"
      />
      <Input
        value={code2}
        onChange={(e) => setCode2(e.target.value)}
        color={code2Correct ? 'success' : 'danger'}
        type="password"
        placeholder="Code 2"
      />
      <button type="button" onClick={submitHandler}>
        Submit
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
