import React from 'react';
import Card from './components/Card';
import { communityData } from './data';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Tech Solutions for Food Policy in Atlanta</h1>
        <p>Digital innovations shaping Atlanta’s food landscape, reducing waste, and improving food access.</p>
      </header>
      <main className="card-grid">
        {communityData.map(({ title, description, link, image }, index) => (
          <Card
            key={index}
            title={title}
            description={description}
            link={link}
            image={image}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
