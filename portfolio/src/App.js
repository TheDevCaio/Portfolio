import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import BackgroundMain from './components/background/BackgroundMain';
import Info from './components/info/Info';
import Abilitys from './components/abilitys/Abilitys';
import GameIndex from './components/gameIndex/GameIndex';
import Projects from './components/projects/ProjectsM';
import MyContacts from './components/contact/MyContacts';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota principal */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <BackgroundMain />
              <Info />
              <GameIndex /> {/* Renderiza o GameIndex apenas quando a rota é / */}
            </>
          }
        />
        {/* Rota de habilidades */}
        <Route path="/skills" element={<><><Abilitys /><BackgroundMain /></><NavBar /></>} />

        <Route
          path="projects"
          element={
            <>
              <NavBar className="nav-projects-fixed" /> {/* Adicione a classe nav-projects-fixed aqui */}
              <Projects /> 
              <BackgroundMain />
            </>
          }
        />

        <Route
          path="/projects/contact"
          element={
            <>
              <NavBar className="nav-contact"/> 
              <BackgroundMain />
            </>
          }
        />

<Route
          path="skills/contact"
          element={
            <>
              <NavBar  /> 
              <BackgroundMain />
            </>
          }
        />


        <Route
          path="contact"
          element={
            <>
              <MyContacts/>
              <NavBar /> 
              <BackgroundMain />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
