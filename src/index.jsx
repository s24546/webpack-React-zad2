import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <header>
      <h1>Navigation Bar</h1>
    </header>
  );
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const Main = ({ data }) => {
  return (
    <main>
      <h2>Popular Web Browsers</h2>
      <section>
        {data.map((browser, index) => (
          <article key={index}>
            <h3>{browser.name}</h3>
            <img src={browser.logo} alt={browser.name} />
            <p>{browser.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright by Bogate Interfejsy Webowe</p>
    </footer>
  );
};

const App = ({ data }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <Main data={data} />
      <Footer />
    </div>
  );
};

const data = [
  {
    name: 'Mozilla Firefox',
    logo: 'https://www.mozilla.org/media/img/firefox/new/128x128.png',
    description: 'Open-source web browser developed by Mozilla.',
  },
  {
    name: 'Google Chrome',
    logo: 'https://www.google.com/chrome/static/images/favicon.ico',
    description: 'Web browser developed by Google.',
  },
  {
    name: 'Microsoft Edge',
    logo: 'https://www.freepnglogos.com/uploads/microsoft-edge-png/microsoft-edge-vector-download-windows-edge-web-browser-browser-png-image-free.png',
    description: 'Web browser developed by Microsoft.',
  },
];

ReactDOM.render(<App data={data} />, document.getElementById('root'));