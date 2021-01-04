import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import tattoos from './data/tattoos';

function App() {
    const tattooItems = tattoos.map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} />;
    });

    return (
        <div className="app">
            <AppHeader />
            <div className="app-grid">
                {tattooItems}
            </div>
        </div>
    );
}

export default App;
