import { useState } from "react";
import "./App.css";
import Result from "./Result";

function App() {
    const handleOpenFolder = ()=>{
        console.log('folder open');
    };

    const handleTranslate = ()=>{
        console.log('translate start');
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>きつねゆっくりリネーマー</p>
            </header>
            <div>
                <button type="button" onClick={handleOpenFolder}>フォルダを選ぶ</button>
                <button type="button" onClick={handleTranslate}>変換開始</button>
                <Result></Result>
            </div>
        </div>
    );
}

export default App;