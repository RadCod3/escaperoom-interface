import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
import Stark from './components/Stark';
import ManualOverride from './components/ManualOverride';
import FailedMissile from './components/FailedMissile';
import SelfDestructClue from './components/selfDestructClue';
import SelfDestructFailed from './components/selfDestructFailed';

export default function App() {
  const [missileActive, setMissileActive] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home missileActive={missileActive} />}>
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
          <Route path="/FailedMissile" element={<FailedMissile />} />
          <Route path="/selfDestructClue" element={<SelfDestructClue />} />
          <Route path="/selfDestructFailed" element={<SelfDestructFailed />} />
        </Route>
      </Routes>
    </Router>
  );
}
