const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld('api',{
  selectFolder: ()=> ipcRenderer.invoke('dialog:openDirectory'),
  fileRename: async (folderPath)=>{
    return await ipcRenderer.invoke('fileRename', folderPath)
  }
})