import { useState } from 'react'
import './App.css'

function App() {
   const [resultValue, setResultValue] = useState('結果')
    const [folderPath, setFolderPath] = useState('');

    const handleOpenFolder = async () => {
        console.log('open folder');
        //if (window.api) {
        //    const selectFolder = await window.api.selectFolder();
        //    setFolderPath(selectFolder);
        //    setResultValue("結果");
        //}
    };

    const handleTranslate = async () => {
        if (folderPath === "" || typeof folderPath === "undefined") {
            setResultValue("フォルダを選んでください");
            return;
        }
        //if (window.api) {
        //    setResultValue(await window.api.fileRename(folderPath));
        //}
    };


  return (
    <div className="App">
            <header className="App-header">
                きつねゆっくりリネーマー
            </header>
            <div className="container mt-3">
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={folderPath} id="folderPath" readOnly />
                    </div>
                    <div className="">
                        <button type="button" className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleOpenFolder}>フォルダを選ぶ</button>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-10">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleTranslate}>変換開始</button>
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
  )
}

export default App
