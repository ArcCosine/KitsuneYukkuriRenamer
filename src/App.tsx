import { useState } from "react";
import "./App.css";
import "./Result.css";

function App() {
    const [result,setResult] = useState('結果をここに表示')

    const handleOpenFolder = async ()=>{
        const folderPath = await window.api.selectFolder();
        document.getElementById("folderPath").value = folderPath;
    };

    const handleTranslate = async ()=>{
        const folderPath = document.getElementById("folderPath").value;
        const results = await window.api.fileRename(folderPath);
        setResult(results);
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
                <div className="Result">
                    <textarea>{result}</textarea>
                </div>
            </div>
        </div>
    );
}

export default App;
