const { app, BrowserWindow, ipcMain, Menu, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const isDev = !app.isPackaged;
const appRoot = isDev
  ? path.join(__dirname, '..')
  : path.join(process.resourcesPath, 'app');

const DATA_FILE = path.join(app.getPath('userData'), 'progress.json');

function readStore() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function writeStore(data) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 860,
    minWidth: 900,
    minHeight: 640,
    title: 'AI Quest',
    backgroundColor: '#0d0221',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
    },
  });

  win.loadFile(path.join(appRoot, 'index.html'));

  if (isDev && process.env.AI_QUEST_DEVTOOLS === '1') {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

function buildMenu() {
  const template = [
    {
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        {
          label: 'Reveal Data File in Finder',
          click: () => {
            shell.showItemInFolder(DATA_FILE);
          },
        },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    { role: 'windowMenu' },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

ipcMain.handle('storage-get', (_, key) => {
  const store = readStore();
  const value = store[key];
  return value != null ? JSON.stringify(value) : null;
});

ipcMain.handle('storage-set', (_, key, jsonString) => {
  const store = readStore();
  store[key] = JSON.parse(jsonString);
  writeStore(store);
});

ipcMain.handle('storage-remove', (_, key) => {
  const store = readStore();
  delete store[key];
  writeStore(store);
});

ipcMain.handle('get-data-path', () => DATA_FILE);

app.whenReady().then(() => {
  buildMenu();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
