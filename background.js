import { app, BrowserWindow} from 'electron'
import path from 'path'

const isDevelopment = ( ( "" + process.env.NODE_ENV).trim() === 'development')


async function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
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
