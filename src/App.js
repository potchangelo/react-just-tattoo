import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';

function App() {
    const [selectedTattoo, setSelectedTattoo] = useState(null);

    function onTattooOpenClick(tattoo) {
        setSelectedTattoo(tattoo);
    }

    function onTattooCloseClick() {
        setSelectedTattoo(null);
    }

    const tattooItems = tattoos.map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
    });

    let tattooPost = null;
    if (!!selectedTattoo) {
        tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />;
    }

    return (
        <div className="app">
            <AppHeader />
            <div className="app-grid">
                {tattooItems}
            </div>
            {tattooPost}
        </div>
    );
}

export default App;
