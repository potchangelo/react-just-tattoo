import './App.css';

function App() {
    const buttonText = 'สักหน่อยมั้ยหละ';
    const okButton = (
        <button>
            {buttonText}
        </button>
    );
    const textInput = (
        <input type="text" />
    );

    return (
        <div className="app">
            <h2>เจ็บปวดที่งดงาม</h2>
            <p>อิอิอิอิ</p>
            <p>
                {textInput}
            </p>
            <p>
                {okButton}
            </p>
        </div>
    );
}

export default App;
