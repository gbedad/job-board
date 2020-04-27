import React from "react";

import "./App.css";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div>
      <header>
        <h1>The Job Board</h1>
      </header>
      <main className="block">
        <div className="container box-red">
          <Jobs
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sidney"
          />
        </div>
        <div className="container box-green">
          <Jobs
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
        <div className="container box-yellow">
          <Jobs
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div className="container box-blue">
          <Jobs
            title="Chef de projet"
            contractType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div className="container box-pink">
          <Jobs
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
        </div>
        <div className="container box-red">
          <Jobs
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          />
        </div>
        <div className="container box-green">
          <Jobs
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans Montana"
          />
        </div>
        <div className="container box-yellow">
          <Jobs
            title="CRM & Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New York"
          />
        </div>
        <div className="container box-blue">
          <Jobs
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
      </main>
      <footer className="footer">
        <h5>
          Made with <span>React</span> at Le <span>Reacteur</span> by GB
        </h5>
      </footer>
    </div>
  );
}

export default App;
