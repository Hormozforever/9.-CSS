import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './components/Cards';
import Teaser from './components/Teaser';
import InfoBox from './components/InfoBox/InfoBox';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="main">
      <h1>CSS und React</h1>
      {/*  <div className="query-demo"></div> */}
      <Cards />
      <Teaser title="Big Container" image="🤖" highlight>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          consectetur molestias deserunt culpa corporis soluta consequatur
          dolore quod ipsum eveniet.
        </p>
      </Teaser>
      <InfoBox title="Co-Location">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          necessitatibus expedita officia provident, nisi, eius sed earum in
          reiciendis itaque placeat vitae magni, quaerat minima odit soluta
          cumque incidunt nam nesciunt. Dolorem officiis nulla, vel unde
          dignissimos aliquam magnam porro.
        </p>
      </InfoBox>
    </main>
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <Teaser title="Small Container" image="👾" headingLevel={3}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corrupti harum assumenda nulla quas sed ullam, cum beatae aperiam
          soluta temporibus a alias. Nemo architecto qui quas quidem cupiditate
          ullam.
        </p>
      </Teaser>
    </aside>
  </React.StrictMode>
);
