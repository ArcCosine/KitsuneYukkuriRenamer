import { useState } from "react";
import "./App.css";
import Result from "./Result";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <p>きつねゆっくりリネーマー</p>
            </header>
            <div>
                <button type="button">フォルダを選ぶ</button>
                <button type="button">変換開始</button>
                <Result></Result>
            </div>
        </div>
    );
}

export default App;