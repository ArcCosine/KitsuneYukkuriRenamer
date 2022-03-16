import { useState } from "react";
import "./App.css";
import "./Result.css";

declare global { interface Window { api: any } }
window.api = window.api || {};

function App() {
    const [resultValue,setResultValue] = useState('結果をここに表示')
    const [folderPath,setFolderPath] = useState('');

    const handleOpenFolder = async ()=>{
        const selectFolder = await window.api.selectFolder();
        setFolderPath(selectFolder);
        setResultValue("結果をここに表示");
    };

    const handleTranslate = async ()=>{
        const results = await window.api.fileRename(folderPath);
        setResultValue("変換完了");
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>きつねゆっくりリネーマー</p>
            </header>
            <div>
                <input type="text" value={folderPath} id="folderPath" readOnly/>
                </div>
                <div>
                <button type="button" onClick={handleOpenFolder}>フォルダを選ぶ</button>
                </div>
                <div>
                <button type="button" onClick={handleTranslate}>変換開始</button>
                <div className="Result">{resultValue}</div>
            </div>
        </div>
    );
}

export default App;
