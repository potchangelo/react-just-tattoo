import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';

function App() {
    return (
        <div className="app">
            <AppHeader />
            <div className="app-grid">
                <TattooItem />
                <TattooItem />
                <TattooItem />
                <div className="tattoo-item">
                    <img src="/images/tattoo-02-small.jpg" />
                    <h4>มือเท่ห์ๆ</h4>
                </div>
                <div className="tattoo-item">
                    <img src="/images/tattoo-03-small.jpg" />
                    <h4>คอเท่ห์ๆ</h4>
                </div>
                <div className="tattoo-item">
                    <img src="/images/tattoo-04-small.jpg" />
                    <h4>หลังเท่ห์ๆ</h4>
                </div>
                <div className="tattoo-item">
                    <img src="/images/tattoo-05-small.jpg" />
                    <h4>แขนเท่ห์ๆ</h4>
                </div>
                <div className="tattoo-item">
                    <img src="/images/tattoo-06-small.jpg" />
                    <h4>แขนเท่ห์ๆ</h4>
                </div>
            </div>
        </div>
    );
}

export default App;
