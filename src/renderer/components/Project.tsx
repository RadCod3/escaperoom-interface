import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/joy';
import { useNavigate, useParams } from 'react-router-dom';
import projects from '../../../assets/projects.json';
import RoboFrame from './RoboFrame';

interface Project_type {
  project_id: number;
  title: string;
  description: string;
  author: string;
  release_year: number;
  other_details: string;
}

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project_type | null>(null);

  useEffect(() => {
    if (!id) return;
    const foundProject = projects.find(
      (p) => p.project_id === parseInt(id, 10)
    );
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  return (
    <div>
      <RoboFrame style={{ width: '90%', height: '50%', margin: '7% auto' }} />
      <Typography
        level="h2"
        variant="plain"
        sx={{
          position: 'relative',
          color: '#00d6fc',
          fontFamily: 'Roboto,sans-serif',
        }}
      >
        Project
      </Typography>
      {project ? (
        <div style={{ position: 'relative' }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.author}</p>
          <p>{project.release_year}</p>
          <p>{project.other_details}</p>
        </div>
      ) : (
        <div>Project not found</div>
      )}
      <button
        className="kave-btn"
        type="button"
        onClick={() => navigate('/projects')}
      >
        <span className="kave-line" />
        Back
      </button>
    </div>
  );
}
