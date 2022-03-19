import { useState } from "react";

import "./App.css";
import { Button } from 'react-bootstrap';

declare global { interface Window { api?: any } }

function App() {
    const [resultValue, setResultValue] = useState('結果')
    const [folderPath, setFolderPath] = useState('');

    const handleOpenFolder = async () => {
        if (window.api) {
            const selectFolder = await window.api.selectFolder();
            setFolderPath(selectFolder);
            setResultValue("結果");
        }
    };

    const handleTranslate = async () => {
        if (folderPath === "" || typeof folderPath === "undefined") {
            setResultValue("フォルダを選んでください");
            return;
        }
        if (window.api) {
            const results = await window.api.fileRename(folderPath);
            setResultValue(results.join("\n"));
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                きつねゆっくりリネーマー
            </header>
            <div className="container mt-3">
                <div className="row mb-3">
                    <div className="col-8">
                        <input className="form-control" type="text" value={folderPath} id="folderPath" readOnly />
                    </div>
                    <div className="col-4">
                        <Button variant="primary" onClick={handleOpenFolder}>フォルダを選ぶ</Button>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-10">
                        <Button variant="success" onClick={handleTranslate}>変換開始</Button>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="Result">{resultValue}</div>
                </div>
            </div>
            <footer>
                <a href="https://www.flaticon.com/free-icons/tools" title="tools icons">Tools icons created by Freepik - Flaticon</a>
            </footer>
        </div>
    );
}

export default App;
