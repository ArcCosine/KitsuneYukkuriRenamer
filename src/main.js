const path = require("path");

const { app, BrowserWindow } = require("electron");
const electronReload = require('electron-reload');

electronReload(__dirname, {
    electron: require('${__dirname}/../../node_modules/electron')
});

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadFile(path.join(__dirname, "app.html"));

//debug
win.webContents.openDevTools()
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
