import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';

function App() {
    const [selectedTattoo, setSelectedTattoo] = useState(tattoos[2]);

    const tattooItems = tattoos.map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} />;
    });

    let tattooPost = null;
    if (!!selectedTattoo) {
        tattooPost = <TattooPost tattoo={selectedTattoo} />;
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
