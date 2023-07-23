import { useState } from 'react';
import AppHeader from './components/AppHeader';
import AppPurpose from './components/AppPurpose';
import AppSearch from './components/AppSearch';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';
import './App.css';


function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onTattooOpenClick(tattoo) {
    setSelectedTattoo(tattoo);
  }

  function onTattooCloseClick() {
    setSelectedTattoo(null);
  }

  let appPurpose = null;
  if (process.env.REACT_APP_IS_SHOW_PURPOSE === 'true') {
    appPurpose = <AppPurpose />
  }

  const tattooItems = tattoos
    .filter(tattoo => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
    });

  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />;
  }

  return (
    <div className="app">
      {appPurpose}
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{tattooItems}</div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
