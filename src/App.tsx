//import { useState } from "react";
import "./App.css";
import Result from "./Result";

function App() {
    const handleOpenFolder = async ()=>{
        const folderPath = await window.api.selectFolder();
        document.getElementById("folderPath").value = folderPath;
    };

    const handleTranslate = async ()=>{
        const folderPath = document.getElementById("folderPath").value;
        console.log('translate start')
        const results = await window.api.fileRename(folderPath);
        console.log('translate end');
        console.log(results);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>きつねゆっくりリネーマー</p>
            </header>
            <div>
                <input type="text" value="" id="folderPath" readOnly/>
                </div>
                <div>
                <button type="button" onClick={handleOpenFolder}>フォルダを選ぶ</button>
                </div>
                <div>
                <button type="button" onClick={handleTranslate}>変換開始</button>
                <Result></Result>
            </div>
        </div>
    );
}

export default App;
