import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <h1> Страница информации</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus
        asperiores error laborum itaque ipsum.
      </p>
      <button onClick={() => history.push('/')}>Обратно к списку дел</button>
    </div>
  );
};

export default AboutPage;
