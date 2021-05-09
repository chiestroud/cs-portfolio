import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import TechnologyCards from '../components/TechnologyCards';
import { getTechnologies } from '../helpers/data/technologyData';
import TechnologyForm from './TechnologyForm';

export default function Technologies() {
  const [techForm, setTechForm] = useState(false);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies().then((technologiesArray) => setTechnologies(technologiesArray));
  }, []);

  const handleTechClick = () => {
    setTechForm((prevState) => !prevState);
  };

  return (
    <main>
      <header>Technologies</header>
      <hr />
      {!techForm
        ? <Button color='info' onClick={handleTechClick}>Add Technology</Button>
        : <div>
          <Button color='info' onClick={handleTechClick}>Close Form</Button>
          <TechnologyForm setTechnologies={setTechnologies} setTechForm={setTechForm}/>
            </div>
        }
        <section className="techContainer">
        <div className="technlogyContainer">
          {technologies.map((technology) => (
            <TechnologyCards
              key={technology.firebaseKey}
              id={technology.firebaseKey}
              logo={technology.logo}
              technologyName={technology.technologyName}
              setTechnologies={setTechnologies}
              setTechForm={setTechForm}
              firebaseKey={technology.firebaseKey}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
