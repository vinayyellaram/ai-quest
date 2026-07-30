const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('aiQuestDesktop', {
  getItem: (key) => ipcRenderer.invoke('storage-get', key),
  setItem: (key, value) => ipcRenderer.invoke('storage-set', key, value),
  removeItem: (key) => ipcRenderer.invoke('storage-remove', key),
  getDataPath: () => ipcRenderer.invoke('get-data-path'),
});
