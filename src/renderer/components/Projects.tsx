import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/joy/Input/Input';
import projects from '../../../assets/projects.json';

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
      <h1>Projects</h1>
      <Input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        type="text"
        placeholder="Project Name"
      />
      <button
        className="projectlist--buttons"
        type="button"
        onClick={checkProjectName}
      >
        Search
      </button>
      <button
        className="projectlist--buttons"
        type="button"
        onClick={() => navigate('/')}
      >
        Home
      </button>
    </div>
  );
}
