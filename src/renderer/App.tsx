import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
import Stark from './components/Stark';
import ManualOverride from './components/ManualOverride';

export default function App() {
  const [missileActive, setMissileActive] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route
            path="/stark"
            element={<Stark missileActive={missileActive} />}
          />
          <Route
            path="/manualOverride"
            element={<ManualOverride setMissileActive={setMissileActive} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
