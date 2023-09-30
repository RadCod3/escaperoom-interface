import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/joy/Input/Input';
import { Typography } from '@mui/joy';
import projects from '../../../assets/projects.json';
import RoboFrame from './RoboFrame';

export default function Projects() {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const checkProjectName = () => {
    if (projectName === 'stark') {
      navigate('/stark');
    } else if (projectName !== '') {
      // pick a random project from projects.json and navigate to it
      const randomProjectNo = Math.floor(Math.random() * projects.length);
      console.log(randomProjectNo);
      navigate(`/projects/${randomProjectNo}}`);
    }
  };

  return (
    <div>
      <RoboFrame
        style={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          margin: '5% auto',
        }}
      />
      <Typography
        level="h2"
        variant="plain"
        sx={{
          position: 'relative',
          color: '#00d6fc',
          fontFamily: 'Roboto,sans-serif',
        }}
      >
        Projects
      </Typography>
      <Input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        type="text"
        placeholder="Project Name"
        sx={{ margin: '7px 0' }}
      />
      <button
        className="projectlist--buttons kave-btn"
        type="button"
        onClick={checkProjectName}
      >
        <span className="kave-line" />
        Search
      </button>
      <button
        className="projectlist--buttons kave-btn"
        type="button"
        onClick={() => navigate('/')}
      >
        <span className="kave-line" />
        Home
      </button>
    </div>
  );
}
