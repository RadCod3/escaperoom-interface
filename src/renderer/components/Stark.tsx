import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stark() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Project</h1>
      <h2>STARK</h2>
      <p>
        In a world on the brink of global conflict, governments unite in a
        top-secret research initiative known as Project STARK. Faced with
        escalating international tensions, STARK seeks to develop a
        devastatingly powerful weapon system capable of strategic precision and
        reconnaissance to gain the upper hand in potential conflicts. Utilizing
        advanced technologies and cutting-edge weaponry, STARK aims to create a
        missile system that can launch targeted strikes on any location
        worldwide, causing casualties on a scale of millions.
      </p>
      <p>
        Dr. Strausland, Prof. Truman, Dr. Adams, Dr. Rutherford, and Prof.
        Kowalski
      </p>
      <p>2021</p>
      <p>
        STATUS: <span style={{ color: 'red' }}>LAUNCHED</span>
      </p>
      <button type="button" onClick={() => navigate('/projects')}>
        Back
      </button>
    </div>
  );
}
