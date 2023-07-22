// react component that lists a bunch of projects

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
      <input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        type="text"
        placeholder="Project Name"
      />
      <button type="button" onClick={checkProjectName}>
        Search
      </button>
      <Link to="/">Home</Link>
    </div>
  );
}
