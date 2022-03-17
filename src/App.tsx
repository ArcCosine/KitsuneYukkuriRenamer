import { useState } from "react";
import "./App.css";
import "./Result.css";

declare global { interface Window { api?: any } }

function App() {
    const [resultValue,setResultValue] = useState('')
    const [folderPath,setFolderPath] = useState('');

    const handleOpenFolder = async ()=>{
        if( window.api ) {

        const selectFolder = await window.api.selectFolder();
        setFolderPath(selectFolder);
        setResultValue("");
    }
    
    };

    const handleTranslate = async ()=>{
        if( folderPath==="" || typeof folderPath==="undefined"){
            setResultValue("フォルダを選んでください");
            return;
        }
        if( window.api){
            const results = await window.api.fileRename(folderPath);
            setResultValue(results.join("\n"));
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>きつねゆっくりリネーマー</p>
            </header>
            <div>
                <input type="text" value={folderPath} id="folderPath" readOnly/>
                <button type="button" onClick={handleOpenFolder}>フォルダを選ぶ</button>
                </div>
                <div>
                <button type="button" onClick={handleTranslate}>変換開始</button>
                <div className="Result">{resultValue}</div>
            </div>
            <div>
                <a href="https://www.flaticon.com/free-icons/tools" title="tools icons">Tools icons created by Freepik - Flaticon</a>
            </div>
        </div>
    );
}

export default App;
