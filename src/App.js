import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img className="app-header-logo" src="/images/logo.png" />
            </header>
            <div className="app-grid">
                <div className="tattoo-item">
                    <img src="/images/tattoo-01-small.jpg" />
                    <h4>แขนเท่ห์ๆ</h4>
                </div>
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
