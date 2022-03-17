import { app, BrowserWindow, dialog, ipcMain, Menu } from 'electron'
import path from 'path'

import { RenameRule } from "./RenameRule.js"

const isDevelopment = ( ( "" + process.env.NODE_ENV).trim() === 'development')

const template = Menu.buildFromTemplate([
  {
    label: "ファイル",
    submenu: [
      { role:'close', label:'終了' }
    ]
  },
  {
    label: 'ヘルプ',
    submenu:[
      {role:'about',      label:`${app.name}について` },     
    ]
  }
]);

Menu.setApplicationMenu(template);

async function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    }
  })

  ipcMain.handle('dialog:openDirectory', async ()=>{
    const { canceld, filePaths } = await dialog.showOpenDialog(win, {
      properties:['openDirectory']
    })
    if( canceld ){
      return
    } else {
      return filePaths[0]
    }
  })

  ipcMain.handle("fileRename", async (eve,folderPath)=>{
    return await RenameRule(folderPath);
  })

  if ( isDevelopment ) {
    // Load the url of the dev server if in development mode
    await win.loadURL('http://localhost:3000/')
    if (!process.env.IS_TEST) win.webContents.openDevTools()

  } else {
    // Load the index.html when not in development
    win.loadURL('file://' + __dirname + '/index.html')
  }
}

app.whenReady().then(() => {
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
      const installExtension = (await import('electron-devtools-installer')).default;
      const REACT_DEVELOPER_TOOLS  = (await import('electron-devtools-installer')).REACT_DEVELOPER_TOOLS;

      // Install Vue Devtools
      try {
        await installExtension(REACT_DEVELOPER_TOOLS)
      } catch (e) {
        console.error('Vue Devtools failed to install:', e.toString())
      }
    }
    createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
   }
})

app.setAboutPanelOptions({
  applicationName: app.name,
  applicationVersion: process.platform === 'darwin'
    ? app.getVersion()
    : `v${app.getVersion()} (electron@${process.versions['electron']})`,
  copyright: 'Copyright 2022 Arc Cosine',
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
        app.quit()
        })
    }
}
