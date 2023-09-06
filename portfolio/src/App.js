import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import BackgroundMain from './components/background/BackgroundMain';
import Info from './components/info/Info';
import Abilitys from './components/abilitys/Abilitys';
import GameIndex from './components/gameIndex/GameIndex';
import Projects from './components/projects/ProjectsM';

const App = () => {
  const isAuthenticated = true; // Defina como verdadeiro se o usuário estiver autenticado

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <NavBar />
                <BackgroundMain />
                <Info />
                <GameIndex />
              </>
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />

        <Route
          path="/skills"
          element={
            isAuthenticated ? (
              <>
                <NavBar />
                <Abilitys />
                <BackgroundMain />
              </>
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />

        <Route
          path="/projects"
          element={
            isAuthenticated ? (
              <>
                <NavBar className="nav-projects-fixed" />
                <Projects />
                <BackgroundMain />
              </>
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />

        <Route
          path="/contact"
          element={
            isAuthenticated ? (
              <>
                <NavBar />
                <BackgroundMain />
              </>
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;